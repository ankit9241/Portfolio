import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code,
  X,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { technologies, TechnologyKey } from '../utils/technologies';

interface ProjectTech {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface Project {
  title: string;
  description: string;
  tech: ProjectTech[];
  image: string | string[];
  images?: string[];
  github: string;
  live: string;
  isPublished?: boolean;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const PALETTE = 'linear-gradient(90deg, #FFFFFF, #BDBDBD)';

const ProjectDetails = ({ project, isOpen, onClose }: ProjectDetailsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project>(project);
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    setSelectedProject(project);
    if (Array.isArray(project.image)) {
      setCurrentImage(project.image[0] || '');
    } else {
      setCurrentImage(project.image || '');
    }
  }, [project]);

  const allImages = [
    ...(Array.isArray(selectedProject.image) ? selectedProject.image : [selectedProject.image]),
    ...(selectedProject.images || []),
  ].filter(Boolean) as string[];

  const handleImageClick = (img: string) => setCurrentImage(img);

  if (!isOpen) return null;

  const { title, github, live, features = [], challenges = [], learnings = [] } = selectedProject;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal wrapper */}
        <div className="flex min-h-full items-start py-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-gray-700 bg-gradient-to-b from-[#071026]/70 to-[#0b1220]/80 overflow-hidden"
            style={{ minHeight: '420px' }}
            role="document"
          >
            {/* Header (title + close) */}
            <div className="flex items-start justify-between gap-4 p-5 border-b border-gray-800">
              <div className="flex items-center gap-2 flex-1">
                <h2
                  className="text-2xl md:text-3xl font-bold text-white leading-tight"
                  style={{ background: PALETTE, WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close project details"
                  className="md:hidden p-2 rounded-full bg-gray-700/80 text-white hover:bg-gray-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-2 py-1 bg-black/70 border border-accent rounded-3xl text-base text-gray-200 hover:bg-black/80 transition"
                >
                  <Code className="w-5 h-5" />
                  Code
                </a>

                {selectedProject.isPublished ? (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-3xl text-base font-semibold"
                    style={{
                      background: "#F5F5F5",
                      color: "#000000",
                      border: "1px solid #2A2A2A",
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert('This project is not yet published. Coming soon!');
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-3xl text-base bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Coming Soon
                  </button>
                )}
              </div>
            </div>

            {/* Body grid */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left: images */}
              <div className="md:col-span-7">
                {/* Thumbnails - sticky on top for small screens */}
                {allImages.length > 1 && (
                  <div className="sticky top-0 z-20 bg-transparent border-b border-gray-800 p-3">
                    <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
                      {allImages.map((img, idx) => (
                        <button
                          key={img + idx}
                          onClick={() => handleImageClick(img)}
                          className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-transform duration-150 ${
                            currentImage === img ? 'ring-2 ring-offset-1 ring-blue-400/50 scale-105' : 'hover:scale-105'
                          }`}
                          aria-label={`View screenshot ${idx + 1}`}
                        >
                          <img src={img} alt={`${title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main image */}
                <div className="h-[220px] md:h-[420px] bg-gray-800 flex items-center justify-center">
                  <img
                    src={currentImage || allImages[0] || '/assets/kiran-new.png'}
                    alt={title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Right: content */}
              <div className="md:col-span-5 p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech, i) => {
                    const techKey = tech.name.toLowerCase() as TechnologyKey;
                    const techData = technologies[techKey] || {
                      icon: tech.icon,
                      bgColor: 'rgba(255,255,255,0.05)',
                      textColor: '#E6F3FF',
                      borderColor: 'rgba(255,255,255,0.1)'
                    };
                    const Icon = techData.icon || tech.icon;
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                        style={{
                          background: techData.bgColor,
                          color: techData.textColor,
                          border: `1px solid ${techData.borderColor || 'transparent'}`,
                        }}
                      >
                        <Icon className="w-4 h-4 opacity-90" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* Full description */}
                <div className="prose prose-sm dark:prose-invert max-w-none text-gray-200 mb-6">
                  <p className="whitespace-pre-line">{selectedProject.description}</p>
                </div>

                {/* Features */}
                {features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Key features
                    </h3>
                    <ul className="list-none space-y-2 pl-0">
                      {features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-green-400">•</span>
                          <span className="text-gray-200">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {challenges.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-yellow-400" />
                      Challenges and solutions
                    </h3>
                    <ul className="list-none space-y-2 pl-0">
                      {challenges.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-yellow-400">•</span>
                          <span className="text-gray-200">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Learnings */}
                {learnings.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-400" />
                      Key learnings
                    </h3>
                    <ul className="list-none space-y-2 pl-0">
                      {learnings.map((l, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-blue-400">•</span>
                          <span className="text-gray-200">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-4 pt-4 border-t border-gray-800 flex gap-3 md:hidden">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-3xl bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition"
                    >
                      <Code className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}

                  {live && (
                    selectedProject.isPublished ? (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl font-semibold"
                        style={{
                          background: "#F5F5F5",
                          color: "#000000",
                          border: "1px solid #2A2A2A",
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit live site
                      </a>
                    ) : (
                      <button
                        onClick={() => alert('This project is not yet published. Coming soon!')}
                        className="inline-flex items-center gap-2 px-2 py-1 rounded-3xl bg-gray-800 text-gray-400 border border-gray-700 cursor-not-allowed"
                        disabled
                      >
                        <ExternalLink className="w-4 h-4" />
                        Coming soon
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
