import { motion } from "framer-motion";
import { useRef } from "react";
import { Globe, Github, Undo2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../utils/projectsData";
import StatusBadge from "../components/StatusBadge";
import Image from "../components/OptimizedImage";
import { playClickSound } from "../utils/audio";
import SEO from "../components/SEO";

const AllProjects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.slug}`);
  };

  const allProjectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://ankitiitp.tech/projects#webpage",
    "url": "https://ankitiitp.tech/projects",
    "name": "Projects - Ankit Kumar | Full Stack & AI Projects",
    "description": "Explore full-stack web applications, AI tools, and software engineering projects built by Ankit Kumar (IIT Patna).",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://ankitiitp.tech/#website",
      "url": "https://ankitiitp.tech/",
      "name": "Ankit Kumar Portfolio"
    },
    "author": {
      "@type": "Person",
      "@id": "https://ankitiitp.tech/#person",
      "name": "Ankit Kumar"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen w-full bg-transparent text-white px-6 md:px-12 py-12"
    >
      <SEO
        title="Projects - Ankit Kumar | Full Stack & AI Projects"
        description="Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering."
        canonical="https://ankitiitp.tech/projects"
        ogType="website"
        ogTitle="Projects - Ankit Kumar | Full Stack & AI Projects"
        ogDescription="Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering."
        twitterTitle="Projects - Ankit Kumar | Full Stack & AI Projects"
        twitterDescription="Explore my complete portfolio of projects showcasing full-stack development, AI applications, UI/UX design, and software engineering."
        structuredData={allProjectsStructuredData}
      />

      <div className="max-w-6xl mx-auto py-10">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-center mb-6" ref={ref}>
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
            <button
              onClick={() => { playClickSound(); handleBack(); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-sm text-zinc-300 hover:text-white backdrop-blur-md shadow-sm transition-all duration-200"
            >
              <Undo2 className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              <span className="font-sans">All </span>
              <span className="font-serif italic font-normal text-[#E1E0CC]">Projects</span>
            </h1>
          </div>
        </div>

        <p className="text-center text-lg text-zinc-400 max-w-2xl mx-auto mb-16">
          Explore my complete portfolio of projects showcasing production full-stack development,
          AI/LLM-powered systems, and engineering problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] border border-white/[0.09] hover:border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.08)_inset] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => { playClickSound(); handleProjectClick(project); }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

              <div className="relative overflow-hidden aspect-[16/10] border-b border-white/[0.06]">
                <Image
                  src={
                    Array.isArray(project.coverImage)
                      ? project.coverImage[0]
                      : project.coverImage
                  }
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full"
                  imageClassName="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="font-sans font-semibold text-xl text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.isPublished && project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                        onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                        aria-label="Visit project live site"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                        onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                        aria-label="View project github repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-300/85 text-sm sm:text-base mb-5 line-clamp-3 leading-relaxed">
                  {project.shortDescription || project.description}
                </p>

                <p className="text-xs text-zinc-400 font-mono font-medium tracking-wider uppercase mb-3 mt-auto">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    const iconColor = tech.textColor || "#E6F3FF";

                    return (
                      <div
                        key={i}
                        className="relative"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center peer hover:bg-white/[0.08] transition-colors">
                          <Icon
                            className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer"
                            style={{ color: iconColor, opacity: 0.85 }}
                          />
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-900 border border-white/10 text-white text-xs font-medium rounded-lg opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-150 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                          {tech.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                  {project.meta && project.meta.find(item => item.label === 'Status') && (
                    <StatusBadge status={project.meta.find(item => item.label === 'Status')?.value || ''} />
                  )}
                  <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                    <span
                      className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors"
                    >
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProjects;
