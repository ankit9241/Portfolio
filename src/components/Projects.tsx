"use client";
import { useRef } from "react";
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
    <section id="projects" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFFFFF, #888888)",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: "rgba(17,17,17,0.8)",
                border: "1px solid #2A2A2A",
                transition: "transform 160ms ease, box-shadow 160ms ease",
              }}
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
              <div className="p-6">
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
                        {/* Custom Tooltip */}
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
                      {/* Custom Tooltip */}
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

                <p className="text-xs text-gray-secondary mb-3 font-medium tracking-wider">
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
                        {/* Custom Tooltip */}
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
                  <div className="flex items-center gap-1 cursor-pointer group shrink-0 whitespace-nowrap"
                     onClick={() => { playClickSound(); handleProjectClick(project); }}>
                    <span 
                      className="text-sm text-gray-400 group-hover:text-white transition-colors"
                    >
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => { playClickSound(); handleShowMore(); }}
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1a1a2a, #2d2a2a)",
                color: "#FFFFFF",
                border: "1px solid #4A4A4A",
              }}
            >
              <span className="text-white">Show all Projects</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
