"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../utils/projectsData";
import StatusBadge from "./StatusBadge";
import { playClickSound } from "../utils/audio";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/projects");
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <section id="projects" className="w-full relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5" ref={ref}>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/project_bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            <span className="font-sans">Featured </span>
            <span className="font-serif italic font-normal text-[#E1E0CC]">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6 font-sans">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              className="group rounded-2xl overflow-hidden backdrop-blur-md bg-white/[0.02] border border-white/[0.08] hover:border-[#E1E0CC]/40 shadow-lg hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-colors duration-300 flex flex-col h-full cursor-pointer will-change-transform"
              onClick={() => { playClickSound(); handleProjectClick(project); }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    Array.isArray(project.coverImage)
                      ? project.coverImage[0]
                      : project.coverImage
                  }
                  alt={project.title}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.isPublished && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors relative"
                        onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                      >
                        <Globe className="w-5 h-5 peer" />
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mb-2 px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-0 pointer-events-none whitespace-nowrap z-50">
                          View Website
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                        </div>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors relative"
                      onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                    >
                      <Github className="w-5 h-5 peer" />
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mb-2 px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-0 pointer-events-none whitespace-nowrap z-50">
                        View Code
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                <p className="text-xs text-gray-secondary mb-3 font-medium tracking-wider mt-auto">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    const iconColor = tech.textColor || "#E6F3FF";

                    return (
                      <div key={i} className="relative">
                        <div className="w-6 h-6 flex items-center justify-center peer">
                          <Icon
                            className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer"
                            style={{ color: iconColor, opacity: 0.8 }}
                          />
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-0 pointer-events-none whitespace-nowrap z-50">
                          {tech.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between gap-4">
                  {project.meta && project.meta.find(item => item.label === 'Status') && (
                    <StatusBadge status={project.meta.find(item => item.label === 'Status')?.value || ''} />
                  )}
                  <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <span
                      className="text-sm text-gray-400 group-hover:text-white transition-colors"
                    >
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => { playClickSound(); handleShowMore(); }}
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1a1a2a, #2d2a2a)",
                color: "#FFFFFF",
                border: "1px solid #4A4A4A",
              }}
            >
              <span className="text-white">Show all Projects</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
