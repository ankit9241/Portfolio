"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { playClickSound } from "../utils/audio";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const fadeDown = {
  hidden: { opacity: 0, y: -22 },
  show: { opacity: 1, y: 0 },
};

const itemFade = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const headerH = "h-16 md:h-20";

  useEffect(() => {
    // Set active section based on current route
    if (location.pathname === "/projects") {
      setActiveSection("projects");
    } else if (location.pathname === "/") {
      // Check if there's a hash for contact
      if (location.hash === "#contact") {
        setActiveSection("contact");
      } else {
        setActiveSection("home");
      }
    } else if (location.pathname.startsWith("/projects/")) {
      setActiveSection("projects");
    } else {
      setActiveSection("home");
    }

    // Only run scroll observer on home page and exclude projects section from active tracking
    if (location.pathname !== "/" && !location.pathname.startsWith("/projects/")) return;

    const observerOptions = { threshold: 0.3, rootMargin: "-20% 0px -70% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Don't set projects as active when scrolling on home page
        if (entry.target.id === "projects") return;
        entry.isIntersecting && setActiveSection(entry.target.id);
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    const handleScroll = () => {
      const y = window.scrollY + 120;
      for (const s of sections) {
        // Don't track projects section on home page
        if (s.id === "projects") continue;

        const el = document.getElementById(s.id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        isMenuOpen &&
        !t.closest(".mobile-menu-container") &&
        !t.closest(".menu-button")
      )
        setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      if (location.pathname === "/") {
        // If already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // If on other page, navigate to home
        navigate("/");
      }
    } else if (id === "projects") {
      navigate("/projects");
    } else if (id === "contact") {
      if (location.pathname === "/") {
        // If already on home page, scroll to contact section
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If on other page, navigate to home with contact hash and scroll
        navigate("/#contact");
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setActiveSection(id);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>

      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 ${headerH} flex items-center pointer-events-auto backdrop-blur-lg bg-gray-900/20 border-b border-gray-700/30`}
      >
        <div className="w-full px-6 md:px-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Brand Logo */}
            <motion.div variants={itemFade}>
              <div
                className="font-bold text-lg px-3 py-2 rounded-lg select-none"
                style={{
                  background: "#111111",
                  WebkitBackgroundClip: "text",
                  color: "#F5F5F5",
                }}
              >
                Portfolio
              </div>
            </motion.div>

            {/* Desktop Resume Button (Right aligned) */}
            <motion.div variants={itemFade} className="hidden md:block">
              <motion.button
                onClick={() => {
                  playClickSound();
                  window.open("/resume/Ankit_Kumar_Resume.pdf", "_blank");
                }}
                className="flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-md transition hover:scale-105 active:scale-95"
                style={{
                  background: "#F5F5F5",
                  color: "#111111",
                }}
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </motion.button>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.div variants={itemFade} className="md:hidden">
              <button
                onClick={() => { playClickSound(); setIsMenuOpen(!isMenuOpen); }}
                className="menu-button p-2 transition-all duration-200"
                style={{
                  backgroundColor: "transparent"
                }}
              >
                <svg
                  className="h-6 w-6 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  style={{ color: isMenuOpen ? "#FFFFFF" : "#BDBDBD" }}
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 12h16"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h8"
                      />
                    </>
                  )}
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="w-full h-16 md:h-20" />

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Dropdown Popover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -12 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 28
              }}
              className="fixed right-4 top-20 z-50 w-60 md:hidden backdrop-blur-2xl bg-black/60 border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.6),_inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden"
            >
              <div className="p-3 space-y-1.5">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <motion.button
                      key={section.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        playClickSound();
                        scrollToSection(section.id);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 text-left"
                      style={{
                        color: isActive ? "#FFFFFF" : "#BDBDBD",
                        background: isActive ? "rgba(255, 255, 255, 0.06)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <span>{section.label}</span>
                    </motion.button>
                  );
                })}

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    margin: "8px 4px",
                  }}
                />

                {/* Resume Button */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    playClickSound();
                    window.open("/resume/Ankit_Kumar_Resume.pdf", "_blank");
                  }}
                  className="flex items-center justify-center w-full h-11 px-4 py-2 text-sm font-semibold rounded-xl text-black transition-all duration-200 bg-white hover:bg-neutral-100 active:scale-[0.98] shadow-[0_4px_12px_rgba(255,255,255,0.08)]"
                >
                  <Download className="mr-2 w-4 h-4 shrink-0" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
