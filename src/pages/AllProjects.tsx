"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Github, Undo2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../utils/projectsData";
import StatusBadge from "../components/StatusBadge";

const AllProjects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/");
  };

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <div className="min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBack}
          className="flex items-center space-x-2 mb-8 text-gray-400 hover:text-white transition-colors"
        >
          <Undo2 className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF, #888888)",
            }}
          >
            All Projects
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6">
            Explore my complete portfolio of projects showcasing full-stack development, 
            UI/UX design, and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 line-clamp-3">
                  {project.shortDescription || project.description}
                </p>

                <p className="text-sm text-gray-secondary mb-3 font-medium tracking-wider">
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
                        {/* Custom Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-0 pointer-events-none whitespace-nowrap z-50">
                          {tech.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  {project.meta && project.meta.find(item => item.label === 'Status') && (
                    <StatusBadge status={project.meta.find(item => item.label === 'Status')?.value || ''} />
                  )}
                  <div className="flex items-center gap-1 cursor-pointer group"
                     onClick={() => handleProjectClick(project)}>
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
      </div>
    </div>
  );
};

export default AllProjects;
