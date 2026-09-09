import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  ogType?: "website" | "profile" | "article";
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  robots?: string;
  structuredData?: object | null;
}

export const SITE_URL = "https://ankitiitp.tech";
export const DEFAULT_TITLE = "Ankit Kumar - Full Stack Developer | IIT Patna | Portfolio";
export const DEFAULT_DESCRIPTION =
  "Ankit Kumar - Full-Stack Developer & AI Explorer from IIT Patna (Indian Institute of Technology Patna). Explore my portfolio featuring full-stack products, AI projects, and engineering experience.";
export const DEFAULT_IMAGE = "https://ankitiitp.tech/assets/profile-ankit.png";
export const DEFAULT_KEYWORDS =
  "Ankit Kumar, Ankit Kumar IIT Patna, Ankit Kumar IITP, ankitkumar1109, ankit9241, Full Stack Developer, AI Developer, Indian Institute of Technology Patna, IIT Patna, React, TypeScript, Next.js, Node.js, Portfolio";

export const getCanonicalUrl = (pathname: string): string => {
  const cleanPath = pathname.replace(/\/+$/, "");
  if (!cleanPath || cleanPath === "") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;
};

export const HOME_SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://ankitiitp.tech/#profile",
      "url": "https://ankitiitp.tech/",
      "name": "Ankit Kumar - Full Stack Developer | IIT Patna | Portfolio",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://ankitiitp.tech/#website",
        "url": "https://ankitiitp.tech/",
        "name": "Ankit Kumar Portfolio"
      },
      "mainEntity": {
        "@id": "https://ankitiitp.tech/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://ankitiitp.tech/#person",
      "name": "Ankit Kumar",
      "alternateName": [
        "Ankit Kumar IIT Patna",
        "Ankit Kumar IITP",
        "ankit9241",
        "ankitkumar1109"
      ],
      "url": "https://ankitiitp.tech/",
      "image": "https://ankitiitp.tech/assets/profile-ankit.png",
      "jobTitle": "Full Stack Developer & AI Explorer",
      "description": "Ankit Kumar is a Full-Stack Developer and AI Explorer from Indian Institute of Technology Patna (IIT Patna), specializing in building full-stack products, AI applications, and modern web platforms.",
      "email": "mailto:ankitkumar.iitp09@gmail.com",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Indian Institute of Technology Patna",
        "alternateName": ["IIT Patna", "IITP"],
        "url": "https://www.iitp.ac.in",
        "sameAs": "https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Patna"
      },
      "sameAs": [
        "https://www.linkedin.com/in/ankitkumar1109/",
        "https://github.com/ankit9241",
        "https://leetcode.com/u/ankit9241/"
      ],
      "knowsAbout": [
        "Full-Stack Development",
        "Web Development",
        "Artificial Intelligence",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Frontend Engineering",
        "Backend Engineering",
        "Computer Science",
        "Data Analytics",
        "Indian Institute of Technology Patna"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development & AI Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Application Development",
              "description": "End-to-end web applications, SaaS platforms, and responsive websites using React, Next.js, TypeScript, and Node.js."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Agentic Product Engineering",
              "description": "Building AI-powered web tools, LLM integrations, automated workflows, and intelligent applications."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Frontend Engineering & UI/UX Development",
              "description": "High-performance, accessible, and cinematic web interfaces with Framer Motion animations and modern design."
            }
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  ]
};

const updateOrCreateTag = (
  selector: string,
  tagName: string,
  attributes: Record<string, string>
) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([attr, val]) => {
    element!.setAttribute(attr, val);
  });
};

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  image = DEFAULT_IMAGE,
  ogType = "website",
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterCard = "summary_large_image",
  robots = "index, follow",
  structuredData,
}) => {
  const location = useLocation();

  useEffect(() => {
    const finalCanonical = canonical || getCanonicalUrl(location.pathname);
    const finalTitle = title;
    const finalDescription = description;
    const finalImage = image.startsWith("http")
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

    // 1. Title
    document.title = finalTitle;

    // 2. Canonical
    updateOrCreateTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: finalCanonical,
    });

    // 3. Meta Description, Robots, Keywords
    updateOrCreateTag('meta[name="description"]', "meta", {
      name: "description",
      content: finalDescription,
    });

    updateOrCreateTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: robots,
    });

    if (keywords) {
      updateOrCreateTag('meta[name="keywords"]', "meta", {
        name: "keywords",
        content: keywords,
      });
    }

    // 4. Open Graph
    updateOrCreateTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: finalCanonical,
    });

    updateOrCreateTag('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: ogTitle || finalTitle,
    });

    updateOrCreateTag('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: ogDescription || finalDescription,
    });

    updateOrCreateTag('meta[property="og:image"]', "meta", {
      property: "og:image",
      content: finalImage,
    });

    updateOrCreateTag('meta[property="og:type"]', "meta", {
      property: "og:type",
      content: ogType,
    });

    // 5. Twitter
    updateOrCreateTag('meta[property="twitter:url"]', "meta", {
      property: "twitter:url",
      content: finalCanonical,
    });

    updateOrCreateTag('meta[property="twitter:title"]', "meta", {
      property: "twitter:title",
      content: twitterTitle || ogTitle || finalTitle,
    });

    updateOrCreateTag('meta[property="twitter:description"]', "meta", {
      property: "twitter:description",
      content: twitterDescription || ogDescription || finalDescription,
    });

    updateOrCreateTag('meta[property="twitter:image"]', "meta", {
      property: "twitter:image",
      content: twitterImage || finalImage,
    });

    updateOrCreateTag('meta[property="twitter:card"]', "meta", {
      property: "twitter:card",
      content: twitterCard,
    });

    // 6. Structured Data (JSON-LD)
    const jsonLdToUse =
      structuredData !== undefined
        ? structuredData
        : location.pathname === "/" || location.pathname === ""
        ? HOME_SCHEMA_GRAPH
        : null;

    let scriptTag = document.getElementById("schema-graph") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement | null;
      if (scriptTag) {
        scriptTag.id = "schema-graph";
      }
    }

    if (jsonLdToUse) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "schema-graph";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLdToUse, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [
    location.pathname,
    canonical,
    title,
    description,
    keywords,
    image,
    ogType,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCard,
    robots,
    structuredData,
  ]);

  return null;
};

export default SEO;
