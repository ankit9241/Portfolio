import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const SITE_URL = "https://ankitiitp.tech";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMetadata(html, metadata) {
  let result = html;

  // 1. Title
  result = result.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(metadata.title)}</title>`
  );

  // 2. Canonical
  result = result.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`
  );

  // 3. Meta description
  result = result.replace(
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`
  );

  // 4. Open Graph
  result = result.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:type" content="${escapeHtml(metadata.ogType || "website")}" />`
  );
  result = result.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${escapeHtml(metadata.canonical)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(metadata.ogTitle || metadata.title)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(metadata.ogDescription || metadata.description)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:image" content="${escapeHtml(metadata.image)}" />`
  );

  // 5. Twitter
  result = result.replace(
    /<meta\s+property=["']twitter:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="twitter:url" content="${escapeHtml(metadata.canonical)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="twitter:title" content="${escapeHtml(metadata.twitterTitle || metadata.ogTitle || metadata.title)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="twitter:description" content="${escapeHtml(metadata.twitterDescription || metadata.ogDescription || metadata.description)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="twitter:image" content="${escapeHtml(metadata.twitterImage || metadata.image)}" />`
  );
  result = result.replace(
    /<meta\s+property=["']twitter:card["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="twitter:card" content="${escapeHtml(metadata.twitterCard || "summary_large_image")}" />`
  );

  // 6. JSON-LD Structured Data
  if (metadata.structuredData) {
    const jsonLdString = JSON.stringify(metadata.structuredData, null, 2);
    result = result.replace(
      /<script\s+type=["']application\/ld\+json["']\s+id=["']schema-graph["']>[\s\S]*?<\/script>/i,
      `<script type="application/ld+json" id="schema-graph">\n${jsonLdString}\n  </script>`
    );
  }

  return result;
}

async function prerender() {
  console.log("🚀 Starting SSG-Lite route prerendering...");

  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Build the app first.`);
  }
  const baseHtml = fs.readFileSync(templatePath, "utf8");

  // Load project definitions dynamically from projectsData.ts
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: "custom",
  });

  let projects = [];
  try {
    const mod = await vite.ssrLoadModule("/src/utils/projectsData.ts");
    projects = mod.projects || [];
  } finally {
    await vite.close();
  }

  console.log(`📦 Loaded ${projects.length} projects from projectsData.ts`);

  let generatedCount = 0;

  // 1. Homepage (/)
  // dist/index.html is already the homepage, verify/ensure its metadata
  console.log(`✓ [Route 1] / -> ${SITE_URL}/ (dist/index.html)`);
  generatedCount++;

  // 2. All Projects Overview (/projects)
  const projectsMeta = {
    title: "Projects | Ankit Kumar - Full Stack Developer | IIT Patna",
    description:
      "Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering.",
    canonical: `${SITE_URL}/projects`,
    image: `${SITE_URL}/assets/profile-ankit.png`,
    ogType: "website",
    ogTitle: "Projects | Ankit Kumar - Full Stack Developer | IIT Patna",
    ogDescription:
      "Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering.",
    twitterTitle: "Projects | Ankit Kumar - Full Stack Developer | IIT Patna",
    twitterDescription:
      "Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/projects#webpage`,
      url: `${SITE_URL}/projects`,
      name: "Projects | Ankit Kumar",
      description:
        "Explore full-stack web applications, AI tools, and software engineering projects built by Ankit Kumar (IIT Patna).",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Ankit Kumar Portfolio",
      },
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Ankit Kumar",
      },
    },
  };

  const projectsHtml = injectMetadata(baseHtml, projectsMeta);
  const projectsDir = path.join(distDir, "projects");
  fs.mkdirSync(projectsDir, { recursive: true });
  fs.writeFileSync(path.join(projectsDir, "index.html"), projectsHtml, "utf8");
  console.log(`✓ [Route 2] /projects -> ${SITE_URL}/projects (dist/projects/index.html)`);
  generatedCount++;

  // 3. Individual Project Pages (/projects/:slug)
  for (const project of projects) {
    const coverImg = Array.isArray(project.coverImage)
      ? project.coverImage[0]
      : project.coverImage;

    const projectImageUrl = coverImg
      ? coverImg.startsWith("http")
        ? coverImg
        : `${SITE_URL}${coverImg.startsWith("/") ? coverImg : `/${coverImg}`}`
      : `${SITE_URL}/assets/profile-ankit.png`;

    const projectTitle = `${project.title} - ${project.tagline || "Project"} | Ankit Kumar`;
    const projectDescription = project.shortDescription || project.description;
    const projectCanonical = `${SITE_URL}/projects/${project.slug}`;

    const projectStructuredData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/projects/${project.slug}#project`,
      url: `${SITE_URL}/projects/${project.slug}`,
      name: project.title,
      headline: project.tagline || project.title,
      description: projectDescription,
      image: projectImageUrl,
      author: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Ankit Kumar",
        url: `${SITE_URL}/`,
      },
      creator: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Ankit Kumar",
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Ankit Kumar Portfolio",
      },
    };

    const projectMeta = {
      title: projectTitle,
      description: projectDescription,
      canonical: projectCanonical,
      image: projectImageUrl,
      ogType: "article",
      ogTitle: projectTitle,
      ogDescription: projectDescription,
      twitterTitle: projectTitle,
      twitterDescription: projectDescription,
      twitterImage: projectImageUrl,
      structuredData: projectStructuredData,
    };

    const projectHtml = injectMetadata(baseHtml, projectMeta);
    const singleProjectDir = path.join(distDir, "projects", project.slug);
    fs.mkdirSync(singleProjectDir, { recursive: true });
    fs.writeFileSync(path.join(singleProjectDir, "index.html"), projectHtml, "utf8");
    console.log(`✓ [Route ${generatedCount + 1}] /projects/${project.slug} -> ${projectCanonical} (dist/projects/${project.slug}/index.html)`);
    generatedCount++;
  }

  console.log(`🎉 Successfully generated static HTML for all ${generatedCount} routes!`);
}

prerender().catch((err) => {
  console.error("❌ Error during prerendering:", err);
  process.exit(1);
});
