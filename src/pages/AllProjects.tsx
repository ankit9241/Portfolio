"use client";
import { useRef } from "react";
import { Globe, Github, Undo2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../utils/projectsData";
import StatusBadge from "../components/StatusBadge";
import OptimizedImage from "../components/OptimizedImage";
import { playClickSound } from "../utils/audio";

const AllProjects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/");
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-12">
      
      <div className="max-w-6xl mx-auto py-10">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-center mb-6" ref={ref}>
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
            <button
              onClick={() => { playClickSound(); handleBack(); }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Undo2 className="w-5 h-5" />
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

        <p className="text-center text-lg text-text-secondary max-w-2xl mx-auto mb-16">
          Explore my complete portfolio of projects showcasing full-stack development, 
          UI/UX design, and problem-solving abilities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden backdrop-blur-md bg-white/[0.02] border border-white/[0.08] hover:border-accent/40 shadow-lg hover:shadow-[0_12px_30px_rgba(58,134,255,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => { playClickSound(); handleProjectClick(project); }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <OptimizedImage
                  src={
                    Array.isArray(project.coverImage)
                      ? project.coverImage[0]
                      : project.coverImage
                  }
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3C/svg%3E"
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
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => { e.stopPropagation(); playClickSound(); }}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 line-clamp-3">
                  {project.shortDescription || project.description}
                </p>

                <p className="text-sm text-gray-secondary mb-3 font-medium tracking-wider mt-auto">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    const iconColor = tech.textColor || "#E6F3FF";

                    return (
                      <div
                        key={i}
                        className="relative"
                      >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
