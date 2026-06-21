import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Globe, Github, Undo2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../utils/projectsData";
import OptimizedImage from "../components/OptimizedImage";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  const prevProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  const projectImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : (Array.isArray(project.coverImage) ? project.coverImage : [project.coverImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < projectImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
      if (e.key === 'ArrowRight' && currentImageIndex < projectImages.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, projectImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-8 py-0 max-w-6xl">

        {/* VISUAL SHOWCASE */}
        <section className="px-0 py-12 lg:px-8">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <Undo2 size={18} />
            Back to Projects
          </button>

          <div className="space-y-6">
            {/* Image Carousel */}
            <div className="relative">
              {/* Main Image Container */}
              <div
                ref={carouselRef}
                className="relative rounded-2xl overflow-hidden border border-gray-900 max-w-4xl mx-auto aspect-video"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <OptimizedImage
                      src={projectImages[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      sizes="(max-width: 768px) 100vw, 80vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%231a1a1a'/%3E%3C/svg%3E"
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent pointer-events-none z-10"></div>

                {/* Desktop Navigation Arrows */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex - 1 + projectImages.length) % projectImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/80 transition-colors hidden md:block z-20"
                      aria-label="Previous image"
                    >
                      <Undo2 size={20} className="rotate-180" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex + 1) % projectImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/80 transition-colors hidden md:block z-20"
                      aria-label="Next image"
                    >
                      <Undo2 size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {projectImages.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto py-2 px-4 max-w-4xl mx-auto no-scrollbar">
                  {projectImages.map((imgSrc, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video w-16 sm:w-20 md:w-24 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${index === currentImageIndex
                          ? "border-white scale-105 shadow-lg shadow-white/10 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Pagination Dots */}
              {projectImages.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 ${index === currentImageIndex
                        ? "w-8 h-2 bg-white"
                        : "w-1.5 h-1.5 bg-gray-600 hover:bg-gray-400"
                        } rounded-full`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        <section className="px-0 py-0 lg:px-8">

          {/* Title & Tagline */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>

            {project.tagline && (
              <p className="text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed">
                {project.tagline}
              </p>
            )}

            {project.shortDescription && (
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                {project.shortDescription}
              </p>
            )}
          </div>

          {/* Meta Info & Actions */}
          <div
            className="space-y-8"
          >
            {/* Compact Meta Row */}
            {project.meta && project.meta.length > 0 && (
              <div className="flex flex-wrap gap-6 text-sm">
                {project.meta.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-500">{item.label}:</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            {/* {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full text-sm"
                    >
                      <Icon className="w-4 h-4" style={{ color: tech.textColor || "#E6F3FF" }} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            )} */}

            {/* Action Buttons */}
            <div className="flex flex-row gap-3 md:gap-4 flex-wrap">
              {project.isPublished === true && project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base w-auto"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.isPublished === false && (
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-gray-900 text-gray-500 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium cursor-not-allowed border border-gray-800 text-sm sm:text-base w-auto"
                >
                  <Globe className="w-4 h-4" />
                  Coming Soon
                </button>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:border-gray-600 transition-colors text-sm sm:text-base w-auto"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="px-0 py-0 lg:px-8">
          <div className="space-y-24">

            {/* Overview */}
            {project.overview && project.overview.length > 0 && (
              <div
                className="max-w-5xl pt-8"
              >
                <h2 className="text-3xl font-bold mb-8">Overview</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  {project.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Context */}
            {project.context && project.context.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Context</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  {project.context.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Why I Built This */}
            {project.whyBuilt && project.whyBuilt.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Why I Built This</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  {project.whyBuilt.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div
              >
                <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.techStack.map((group, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg font-medium text-white">{group.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1 border border-gray-800 rounded-lg text-sm text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div
              >
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 border border-gray-700 rounded-3xl space-y-3 relative overflow-hidden"
                    >
                      {/* Background Number */}
                      <div className="absolute bottom-2 right-2 text-[140px] font-bold text-white/5 select-none z-0 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Details */}
            {project.technicalDetails && project.technicalDetails.length > 0 && (
              <div
              >
                <h2 className="text-3xl font-bold mb-8">Technical Details</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.technicalDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="p-6 border border-gray-700 rounded-3xl space-y-3 relative overflow-hidden"
                    >
                      {/* Background Number */}
                      <div className="absolute bottom-2 right-2 text-[140px] font-bold text-white/5 select-none z-0 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-medium text-white">{detail.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Challenges</h2>
                <div className="space-y-12">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-6">
                      <h3 className="text-2xl font-medium text-white">{challenge.title}</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Problem</h4>
                          <p className="text-gray-300 leading-relaxed">{challenge.problem}</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Results</h2>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <p className="text-gray-300 leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">What I Learned</h2>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <p className="text-gray-300 leading-relaxed">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Future Scope */}
            {project.futureScope && project.futureScope.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Future Scope</h2>
                <div className="space-y-4">
                  {project.futureScope.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Status Note */}
            {project.statusNote && project.statusNote.length > 0 && (
              <div
                className="max-w-5xl"
              >
                <h2 className="text-3xl font-bold mb-8">Status Note</h2>
                <div className="space-y-3">
                  {project.statusNote.map((note, index) => (
                    <p key={index} className="text-gray-500 text-sm leading-relaxed">{note}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* RELATED PROJECTS */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <section className="px-0 py-0 lg:px-8 border-t border-gray-900">
            <div
            >
              <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.relatedProjects.map((relatedSlug, index) => {
                  const relatedProject = projects.find(p => p.slug === relatedSlug);
                  if (!relatedProject) return null;

                  return (
                    <button
                      key={index}
                      onClick={() => navigate(`/projects/${relatedProject.slug}`)}
                      className="text-left p-6 border border-gray-900 rounded-2xl hover:border-gray-700 transition-colors group"
                    >
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {relatedProject.shortDescription}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* NAVIGATION FOOTER */}
        <section className="px-0 py-0 lg:px-8 border-t border-gray-900">
          <div
            className="grid md:grid-cols-2 gap-8 py-16"
          >
            {prevProject && (
              <button
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="group flex items-center gap-4 p-6 border border-gray-900 rounded-2xl hover:border-gray-700 transition-colors text-left bg-gray-900/50 hover:bg-gray-800/50"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gray-800 rounded-full group-hover:border-gray-600 transition-colors">
                  <Undo2 size={20} className="rotate-180" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Previous Project</p>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="group flex items-center gap-4 p-6 border border-gray-900 rounded-2xl hover:border-gray-700 transition-colors text-right justify-end bg-gray-900/50 hover:bg-gray-800/50"
              >
                <div>
                  <p className="text-gray-500 text-sm mb-1">Next Project</p>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center border border-gray-800 rounded-full group-hover:border-gray-600 transition-colors">
                  <Undo2 size={20} />
                </div>
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;