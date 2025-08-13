import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode, HiX, HiCheckCircle, HiLightBulb, HiShieldCheck } from 'react-icons/hi';

interface ProjectTech {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
    textColor: string;
    borderColor: string;
}

interface Project {
    title: string;
    description: string;
    tech: ProjectTech[];
    image: string;
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

const ProjectDetails = ({ project, isOpen, onClose }: ProjectDetailsProps) => {
    const [selectedProject, setSelectedProject] = useState<Project>(project);

    // Update local state when project prop changes
    useEffect(() => {
        setSelectedProject(project);
    }, [project]);

    const handleImageClick = (img: string) => {
        setSelectedProject(prev => ({
            ...prev,
            image: img
        }));
    };
    if (!isOpen) return null;

    // Use selected project data or default to empty arrays
    const {
        features = [],
        challenges = [],
        learnings = [],
        images = [selectedProject.image],
        github,
        live
    } = selectedProject;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 overflow-y-auto"
            >
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="flex min-h-full items-center justify-center p-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-gray-800 dark:text-white hover:bg-white/20 transition-colors"
                            aria-label="Close"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        {/* Fixed height image container with flex-shrink-0 */}
                        <div className="flex-shrink-0 h-[350px] overflow-hidden bg-gray-100 dark:bg-gray-700">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={selectedProject.image || "/assets/kiran-new.png"}
                                    alt={selectedProject.title}
                                    className="max-w-full max-h-full object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* Image gallery */}
                        {images.length > 1 && (
                            <div className="border-t border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2">
                                <div className="flex space-x-2 overflow-x-auto py-2">
                                    {images.map((img, idx) => (
                                        <button
                                            key={img}
                                            onClick={() => {
                                                // Update the main image when a thumbnail is clicked
                                                handleImageClick(img);
                                            }}
                                            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${selectedProject.image === img
                                                    ? 'border-blue-500 dark:border-blue-400'
                                                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 350px)' }}>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {selectedProject.title}
                                </h2>
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tech.map((tech: ProjectTech, index: number) => {
                                    const Icon = tech.icon;
                                    return (
                                        <span
                                            key={index}
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tech.bgColor} ${tech.textColor} ${tech.borderColor} border`}
                                        >
                                            <Icon className="mr-1.5 h-4 w-4" />
                                            {tech.name}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Description */}
                            <div className="prose dark:prose-invert max-w-none mb-8">
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Features */}
                            {features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <HiCheckCircle className="mr-2 text-green-500" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {features.map((feature: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Challenges */}
                            {challenges.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <HiShieldCheck className="mr-2 text-yellow-500" />
                                        Challenges & Solutions
                                    </h3>
                                    <ul className="space-y-2">
                                        {challenges.map((challenge: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-yellow-500 mr-2">•</span>
                                                <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Learnings */}
                            {learnings.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <HiLightBulb className="mr-2 text-blue-500" />
                                        Key Learnings
                                    </h3>
                                    <ul className="space-y-2">
                                        {learnings.map((learning: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span className="text-gray-700 dark:text-gray-300">{learning}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                {github && (
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                    >
                                        <HiCode className="mr-2" />
                                        View on GitHub
                                    </a>
                                )}
                                {live && (selectedProject.isPublished ? (
                                    <a
                                        href={live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        <HiExternalLink className="mr-2" />
                                        Visit Live Site
                                    </a>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            alert('This project is not yet published. Coming soon!');
                                        }}
                                        className="inline-flex items-center px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed whitespace-nowrap"
                                        disabled
                                    >
                                        <HiExternalLink className="mr-2" />
                                        Coming Soon
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetails;
