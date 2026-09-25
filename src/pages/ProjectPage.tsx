import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Globe, Github, Undo2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../utils/projectsData";
import Image from "../components/OptimizedImage";
import SEO, { getProjectSeoTitle } from "../components/SEO";

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

  const projectImages = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : (project ? (Array.isArray(project.coverImage) ? project.coverImage : [project.coverImage]) : []);

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
        <SEO
          title="Project Not Found | Ankit Kumar Portfolio"
          description="The requested project could not be found."
          robots="noindex, nofollow"
          canonical="https://ankitiitp.tech/404"
        />
        <h1 className="text-white text-2xl">Project Not Found</h1>
      </div>
    );
  }

  const coverImg = Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage;
  const projectImageUrl = coverImg
    ? (coverImg.startsWith("http") ? coverImg : `https://ankitiitp.tech${coverImg.startsWith("/") ? coverImg : `/${coverImg}`}`)
    : "https://ankitiitp.tech/assets/profile-ankit.png";

  const projectTitle = getProjectSeoTitle(project);
  const projectDescription = project.shortDescription || project.description;
  const projectCanonical = `https://ankitiitp.tech/projects/${project.slug}`;

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://ankitiitp.tech/projects/${project.slug}#project`,
    "url": `https://ankitiitp.tech/projects/${project.slug}`,
    "name": project.title,
    "headline": project.tagline || project.title,
    "description": projectDescription,
    "image": projectImageUrl,
    "author": {
      "@type": "Person",
      "@id": "https://ankitiitp.tech/#person",
      "name": "Ankit Kumar",
      "url": "https://ankitiitp.tech/"
    },
    "creator": {
      "@type": "Person",
      "@id": "https://ankitiitp.tech/#person",
      "name": "Ankit Kumar"
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://ankitiitp.tech/#website",
      "url": "https://ankitiitp.tech/",
      "name": "Ankit Kumar Portfolio"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen text-white bg-transparent mx-4 md:mx-16 lg:mx-36 xl:mx-56"
    >
      <SEO
        title={projectTitle}
        description={projectDescription}
        canonical={projectCanonical}
        image={projectImageUrl}
        ogType="article"
        ogTitle={projectTitle}
        ogDescription={projectDescription}
        twitterTitle={projectTitle}
        twitterDescription={projectDescription}
        twitterImage={projectImageUrl}
        structuredData={projectStructuredData}
      />
      <div className="container mx-auto px-8 py-0 max-w-6xl">
        <section className="px-0 py-12 lg:px-8">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-sm text-zinc-300 hover:text-white backdrop-blur-md shadow-sm transition-all duration-200 mb-10"
          >
            <Undo2 size={16} />
            <span>Back to Projects</span>
          </button>

          <div className="space-y-6">
            <div className="relative">
              <div
                ref={carouselRef}
                className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.08)_inset] bg-white/[0.02] backdrop-blur-2xl max-w-4xl mx-auto aspect-video"
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
                    <Image
                      src={projectImages[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      sizes="(max-width: 768px) 100vw, 80vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%231a1a1a'/%3E%3C/svg%3E"
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>

                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex - 1 + projectImages.length) % projectImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-black/80 hover:border-white/20 transition-all hidden md:block z-20 shadow-lg"
                      aria-label="Previous image"
                    >
                      <Undo2 size={20} className="rotate-180" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex + 1) % projectImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-black/80 hover:border-white/20 transition-all hidden md:block z-20 shadow-lg"
                      aria-label="Next image"
                    >
                      <Undo2 size={20} />
                    </button>
                  </>
                )}
              </div>

              {projectImages.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto py-2 px-4 max-w-4xl mx-auto no-scrollbar">
                  {projectImages.map((imgSrc, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video w-16 sm:w-20 md:w-24 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${index === currentImageIndex
                        ? "border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.25)] opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-80"
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full"
                        imageClassName="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {projectImages.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 ${index === currentImageIndex
                        ? "w-8 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        : "w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400"
                        } rounded-full`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-0 py-0 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white tracking-tight">
                {project.title}
              </h1>

              {((project.isPublished === true && project.live && project.live !== "#") ||
                (project.isPublished === false && project.live && project.live !== "#") ||
                (project.github && project.github !== "#")) && (
                <div className="flex items-center gap-3 shrink-0">
                  {project.isPublished === true && project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-200 shadow-sm"
                      aria-label="Go Live"
                    >
                      <Globe className="w-5 h-5" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-900 border border-white/10 text-white text-xs font-medium rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-150 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                        Go Live
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
                      </div>
                    </a>
                  )}
                  {project.isPublished === false && project.live && project.live !== "#" && (
                    <div
                      className="group/btn relative p-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-zinc-600 cursor-not-allowed shadow-sm"
                      aria-label="Coming Soon"
                    >
                      <Globe className="w-5 h-5" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-150 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                        Coming Soon
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
                      </div>
                    </div>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-200 shadow-sm"
                      aria-label="Source Code"
                    >
                      <Github className="w-5 h-5" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-900 border border-white/10 text-white text-xs font-medium rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-150 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                        Source Code
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.tagline && (
              <p className="font-serif italic text-xl lg:text-2xl text-zinc-300/90 mb-6 leading-relaxed font-normal">
                "{project.tagline}"
              </p>
            )}

            {project.shortDescription && (
              <p className="text-lg text-zinc-300/90 leading-relaxed max-w-4xl mb-8">
                {project.shortDescription}
              </p>
            )}

            {project.meta && project.meta.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.meta.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs shadow-sm"
                  >
                    <span className="text-zinc-400 font-mono uppercase tracking-wider">{item.label}:</span>
                    <span className="text-zinc-100 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-0 py-0 lg:px-8">
          <div className="space-y-24">
            {project.overview && project.overview.length > 0 && (
              <div className="max-w-5xl pt-4">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Overview</h2>
                <div className="space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {project.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {project.context && project.context.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Context</h2>
                <div className="space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {project.context.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {project.whyBuilt && project.whyBuilt.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Why I Built This</h2>
                <div className="space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {project.whyBuilt.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="w-full">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8 text-white tracking-tight">Tech Stack</h2>
                <div className="border-t border-white/10 w-full">
                  {project.techStack.map((group, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-white/10 py-5 items-center gap-4 md:gap-8"
                    >
                      <div className="flex items-center gap-3 text-base font-semibold">
                        <span className="text-zinc-500 font-mono tracking-wider text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-zinc-300 font-medium tracking-tight">
                          {group.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {group.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/[0.08] hover:border-white/20 text-zinc-200 text-xs md:text-sm font-medium transition-all duration-200 shadow-sm"
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

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8 text-white tracking-tight">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="relative group p-7 rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] hover:border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.08)_inset] hover:-translate-y-1 transition-all duration-300 space-y-3 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                      <div className="absolute -bottom-2 sm:-bottom-3 right-4 sm:right-6 text-[90px] sm:text-[110px] font-black text-white/[0.04] group-hover:text-white/[0.07] select-none z-0 leading-none pointer-events-none tracking-tighter transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10">
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-white mb-2 tracking-tight">{feature.title}</h3>
                        <p className="text-zinc-300/90 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technicalDetails && project.technicalDetails.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8 text-white tracking-tight">Technical Details</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.technicalDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="relative group p-7 rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] hover:border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.08)_inset] hover:-translate-y-1 transition-all duration-300 space-y-3 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                      <div className="absolute -bottom-2 sm:-bottom-3 right-4 sm:right-6 text-[90px] sm:text-[110px] font-black text-white/[0.04] group-hover:text-white/[0.07] select-none z-0 leading-none pointer-events-none tracking-tighter transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10">
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-white mb-2 tracking-tight">{detail.title}</h3>
                        <p className="text-zinc-300/90 leading-relaxed text-sm sm:text-base">{detail.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.metrics && project.metrics.length > 0 && (
              <div className="w-full">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Key Metrics & Highlights</h2>
                <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.08)_inset] overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                  <div
                    className={`grid grid-cols-1 ${
                      project.metrics.length === 1
                        ? "grid-cols-1"
                        : project.metrics.length === 2
                        ? "sm:grid-cols-2"
                        : project.metrics.length === 3
                        ? "sm:grid-cols-3"
                        : "sm:grid-cols-2 lg:grid-cols-4"
                    } divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]`}
                  >
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="p-5 sm:p-6 flex flex-col justify-center space-y-2 hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-zinc-500 font-mono text-xs font-semibold tracking-wider">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                            {metric.label}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-white tracking-tight">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8 text-white tracking-tight">Challenges</h2>
                <div className="space-y-12">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-6">
                      <h3 className="font-sans font-semibold text-lg sm:text-xl text-white tracking-tight">{challenge.title}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.06)_inset] space-y-2.5 overflow-hidden">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest font-mono">Problem</h4>
                          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{challenge.problem}</p>
                        </div>
                        <div className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.06)_inset] space-y-2.5 overflow-hidden">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none" />
                          <h4 className="text-xs font-semibold text-emerald-300/90 uppercase tracking-widest font-mono">Solution</h4>
                          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.results && project.results.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Results</h2>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="relative p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.07] shadow-[0_6px_24px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.05)_inset] flex items-start gap-3.5 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent pointer-events-none" />
                      <span className="text-emerald-400 mt-0.5 font-bold">✓</span>
                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.learnings && project.learnings.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">What I Learned</h2>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div
                      key={index}
                      className="relative p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.07] shadow-[0_6px_24px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.05)_inset] flex items-start gap-3.5 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                      <span className="text-zinc-300 mt-0.5 font-bold">✦</span>
                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.futureScope && project.futureScope.length > 0 && (
              <div className="max-w-5xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-6 text-white tracking-tight">Future Scope</h2>
                <div className="space-y-4">
                  {project.futureScope.map((item, index) => (
                    <div
                      key={index}
                      className="relative p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.07] shadow-[0_6px_24px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.05)_inset] flex items-start gap-3.5 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent pointer-events-none" />
                      <span className="text-sky-400 mt-0.5 font-bold">→</span>
                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="px-0 py-0 lg:px-8">
          {prevProject && nextProject ? (
            <div className="grid md:grid-cols-2 gap-8 py-16">
              <button
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 text-left bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl hover:from-white/[0.12] hover:via-white/[0.06] hover:to-white/[0.03] border border-white/[0.08] hover:border-white/25 shadow-[0_10px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.08)_inset] hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <div className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl group-hover:border-white/25 group-hover:bg-white/10 transition-all bg-white/[0.03] shrink-0">
                  <Undo2 size={18} className="rotate-180 text-zinc-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs font-mono font-medium uppercase tracking-wider mb-0.5">Previous Project</p>
                  <p className="font-sans font-semibold text-zinc-200 text-base sm:text-lg group-hover:text-white transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </button>

              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 text-right justify-end bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl hover:from-white/[0.12] hover:via-white/[0.06] hover:to-white/[0.03] border border-white/[0.08] hover:border-white/25 shadow-[0_10px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.08)_inset] hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <div>
                  <p className="text-zinc-400 text-xs font-mono font-medium uppercase tracking-wider mb-0.5">Next Project</p>
                  <p className="font-sans font-semibold text-zinc-200 text-base sm:text-lg group-hover:text-white transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl group-hover:border-white/25 group-hover:bg-white/10 transition-all bg-white/[0.03] shrink-0">
                  <Undo2 size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
                </div>
              </button>
            </div>
          ) : (
            <div className="flex justify-center py-16">
              {prevProject && (
                <button
                  onClick={() => navigate(`/projects/${prevProject.slug}`)}
                  className="group relative inline-flex items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 text-left bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.01] backdrop-blur-2xl hover:from-white/[0.13] hover:via-white/[0.07] hover:to-white/[0.03] border border-white/[0.09] hover:border-white/30 shadow-[0_12px_36px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.09)_inset] hover:-translate-y-0.5 min-w-[280px] sm:min-w-[340px] overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl group-hover:border-white/25 group-hover:bg-white/10 transition-all bg-white/[0.03] shrink-0">
                    <Undo2 size={18} className="rotate-180 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs font-mono font-medium uppercase tracking-wider mb-0.5">Previous Project</p>
                    <p className="font-sans font-semibold text-zinc-200 text-base sm:text-lg group-hover:text-white transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </button>
              )}
              {nextProject && (
                <button
                  onClick={() => navigate(`/projects/${nextProject.slug}`)}
                  className="group relative inline-flex items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-300 text-right justify-between sm:justify-end bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.01] backdrop-blur-2xl hover:from-white/[0.13] hover:via-white/[0.07] hover:to-white/[0.03] border border-white/[0.09] hover:border-white/30 shadow-[0_12px_36px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.09)_inset] hover:-translate-y-0.5 min-w-[280px] sm:min-w-[340px] overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <div>
                    <p className="text-zinc-400 text-xs font-mono font-medium uppercase tracking-wider mb-0.5">Next Project</p>
                    <p className="font-sans font-semibold text-zinc-200 text-base sm:text-lg group-hover:text-white transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl group-hover:border-white/25 group-hover:bg-white/10 transition-all bg-white/[0.03] shrink-0">
                    <Undo2 size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                </button>
              )}
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectPage;