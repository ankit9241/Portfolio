import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Home, FileText, Code2, Briefcase, LayoutGrid, GitBranch, Award, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { playClickSound } from "../utils/audio";

type Section = {
     id: string;
     label: string;
     Icon: typeof Home;
};

const sections: Section[] = [
     { id: "home", label: "Home", Icon: Home },
     { id: "about", label: "About Me", Icon: FileText },
     { id: "skills", label: "Tech Stack", Icon: Code2 },
     { id: "experience", label: "Experience", Icon: Briefcase },
     { id: "projects", label: "Projects", Icon: LayoutGrid },
     { id: "github", label: "GitHub Streak", Icon: GitBranch },
     { id: "certificates", label: "Certificates", Icon: Award },
];

export function Sidebar({ onOpenSearch }: { onOpenSearch?: () => void }) {
     const [isVisible, setIsVisible] = useState(false);
     const [activeSection, setActiveSection] = useState("home");
     const location = useLocation();
     const navigate = useNavigate();

     useEffect(() => {
          const toggleVisibility = () => {
               if (window.scrollY > 120) {
                    setIsVisible(true);
               } else {
                    setIsVisible(false);
               }
          };

          window.addEventListener("scroll", toggleVisibility);
          toggleVisibility();

          return () => window.removeEventListener("scroll", toggleVisibility);
     }, []);

     useEffect(() => {
          if (location.pathname === "/") {
               const hash = location.hash.replace("#", "");
               if (hash && sections.some(s => s.id === hash)) {
                    setActiveSection(hash);
               } else {
                    setActiveSection("home");
               }
          } else if (location.pathname === "/projects" || location.pathname.startsWith("/projects/")) {
               setActiveSection("projects");
          } else {
               setActiveSection("");
          }
     }, [location]);

     useEffect(() => {
          if (location.pathname !== "/") return;

          const handleScrollSpy = () => {
               const windowHeight = window.innerHeight;
               let currentActive = "home";

               for (const section of sections) {
                    const element = document.getElementById(section.id);
                    if (element) {
                         const rect = element.getBoundingClientRect();
                         if (rect.top <= windowHeight / 3) {
                              currentActive = section.id;
                         }
                    }
               }
               setActiveSection(currentActive);
          };

          window.addEventListener("scroll", handleScrollSpy);
          handleScrollSpy();

          return () => window.removeEventListener("scroll", handleScrollSpy);
     }, [location.pathname]);

     const scrollToSection = (id: string) => {
          playClickSound();
          if (location.pathname === "/") {
               const element = document.getElementById(id);
               if (element) {
                    const targetY = element.getBoundingClientRect().top + window.scrollY;

                    animate(window.scrollY, targetY, {
                         type: "tween",
                         ease: [0.25, 1, 0.5, 1],
                         duration: 0.8,
                         onUpdate: (latest) => window.scrollTo(0, latest),
                    });
               }
          } else {
               navigate(`/#${id}`);
               setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                         const targetY = element.getBoundingClientRect().top + window.scrollY;
                         window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
               }, 100);
          }
     };

     const activeIndex = sections.findIndex((section) => section.id === activeSection);

     // Theme-aware styles (always dark)
     const containerBg = "rgba(15, 15, 18, 0.85)";
     const containerBorder = "1px solid rgba(63, 63, 70, 0.45)";
     const containerShadow = "0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 0.5px rgba(255,255,255,0.06) inset";

     const iconDefault = "#a1a1aa";
     const iconHover = "#e4e4e7";
     const iconActive = "#18181b";

     const activeBg = "#fafafa";
     const activeGlow = "0 0 12px rgba(250, 250, 250, 0.2)";

     const separatorColor = "rgba(63, 63, 70, 0.5)";

     const tooltipBg = "#18181b";
     const tooltipText = "#e4e4e7";
     const tooltipBorder = "rgba(63, 63, 70, 0.6)";

     return (
          <AnimatePresence>
               {isVisible && (
                    <motion.nav
                         initial={{ opacity: 0, x: 20, y: "-50%" }}
                         animate={{ opacity: 1, x: 0, y: "-50%" }}
                         exit={{ opacity: 0, x: 20, y: "-50%" }}
                         transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                         className="fixed right-6 xl:right-auto xl:left-[calc(50%+536px)] top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1 p-1.5 rounded-full"
                         style={{
                              background: containerBg,
                              border: containerBorder,
                              boxShadow: containerShadow,
                              backdropFilter: "blur(20px) saturate(1.6)",
                              WebkitBackdropFilter: "blur(20px) saturate(1.6)",
                         }}
                         aria-label="Page navigation"
                    >
                         {/* Active background indicator */}
                         {activeIndex !== -1 && (
                              <motion.div
                                   className="absolute left-1.5 w-[38px] h-[38px] rounded-full z-0 pointer-events-none"
                                   style={{
                                        backgroundColor: activeBg,
                                        boxShadow: activeGlow,
                                        top: "6px",
                                   }}
                                   animate={{
                                        y: activeIndex * 42, // 38px height + 4px gap
                                   }}
                                   transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              />
                         )}

                         {sections.map((section) => {
                              const isActive = activeSection === section.id;
                              return (
                                   <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="group relative p-2.5 rounded-full z-10 focus:outline-hidden cursor-pointer"
                                        style={{
                                             transition: "background-color 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                             if (!isActive) {
                                                  e.currentTarget.style.backgroundColor = "rgba(63, 63, 70, 0.35)";
                                             }
                                        }}
                                        onMouseLeave={(e) => {
                                             e.currentTarget.style.backgroundColor = "transparent";
                                        }}
                                        aria-label={`Scroll to ${section.label}`}
                                   >
                                        <section.Icon
                                             className="h-[18px] w-[18px] relative z-10"
                                             style={{
                                                  color: isActive ? iconActive : iconDefault,
                                                  transition: "color 0.25s ease",
                                             }}
                                             onMouseEnter={(e) => {
                                                  if (!isActive) {
                                                       (e.currentTarget as SVGElement).style.color = iconHover;
                                                  }
                                             }}
                                             onMouseLeave={(e) => {
                                                  if (!isActive) {
                                                       (e.currentTarget as SVGElement).style.color = iconDefault;
                                                  }
                                             }}
                                        />
                                        {/* Tooltip */}
                                        <span
                                             className="absolute right-12 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 rounded-lg px-2.5 py-1.5 text-xs font-medium shadow-lg origin-right whitespace-nowrap pointer-events-none z-50"
                                             style={{
                                                  backgroundColor: tooltipBg,
                                                  color: tooltipText,
                                                  border: `1px solid ${tooltipBorder}`,
                                                  transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.15s ease",
                                                  backdropFilter: "blur(12px)",
                                             }}
                                        >
                                             {section.label}
                                        </span>
                                   </button>
                              );
                         })}

                         {/* Separator */}
                         <div
                              className="w-5 my-0.5 rounded-full"
                              style={{
                                   height: "1px",
                                   backgroundColor: separatorColor,
                              }}
                         />

                         {/* Search (⌘K) Button */}
                         <button
                              onClick={() => { playClickSound(); onOpenSearch?.(); }}
                              className="group relative p-2.5 rounded-full z-10 focus:outline-hidden cursor-pointer"
                              style={{
                                   transition: "background-color 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                   e.currentTarget.style.backgroundColor = "rgba(63, 63, 70, 0.35)";
                              }}
                              onMouseLeave={(e) => {
                                   e.currentTarget.style.backgroundColor = "transparent";
                              }}
                              aria-label="Open search (Ctrl+K)"
                         >
                              <Search
                                   className="h-[18px] w-[18px] relative z-10"
                                   style={{
                                        color: iconDefault,
                                        transition: "color 0.25s ease",
                                   }}
                                   onMouseEnter={(e) => {
                                        (e.currentTarget as SVGElement).style.color = iconHover;
                                   }}
                                   onMouseLeave={(e) => {
                                        (e.currentTarget as SVGElement).style.color = iconDefault;
                                   }}
                              />
                              {/* Tooltip */}
                              <span
                                   className="absolute right-12 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 rounded-lg px-2.5 py-1.5 text-xs font-medium shadow-lg origin-right whitespace-nowrap pointer-events-none z-50"
                                   style={{
                                        backgroundColor: tooltipBg,
                                        color: tooltipText,
                                        border: `1px solid ${tooltipBorder}`,
                                        transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.15s ease",
                                        backdropFilter: "blur(12px)",
                                   }}
                              >
                                   Search ⌘K
                              </span>
                         </button>
                    </motion.nav>
               )}
          </AnimatePresence>
     );
}
