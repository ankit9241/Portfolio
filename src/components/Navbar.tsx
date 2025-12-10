"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";
import {
  FaHome,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaDownload,
  FaLaptopCode,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <FaHome className="mr-2" /> },
  { id: "skills", label: "Skills", icon: <FaCode className="mr-2" /> },
  {
    id: "experience",
    label: "Experience",
    icon: <FaBriefcase className="mr-2" />,
  },

  {
    id: "projects",
    label: "Projects",
    icon: <FaLaptopCode className="mr-2" />,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: <TbCertificate className="mr-2" />,
  },
  { id: "contact", label: "Contact", icon: <FaEnvelope className="mr-2" /> },
];

// ✨ animation variants (added)
const fadeDown = {
  hidden: { opacity: 0, y: -22 },
  show: { opacity: 1, y: 0 },
};

const staggerFade = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerH = "h-16 md:h-20";
  const gradient = "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)";

  // ---- Scroll & section tracking logic (unchanged) ----
  useEffect(() => {
    const observerOptions = { threshold: 0.3, rootMargin: "-20% 0px -70% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setActiveSection(entry.target.id)
      );
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
  }, []);

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
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR MAIN ===== */}

      <motion.nav
        variants={fadeDown} // ✨ Added
        initial="hidden"
        animate="show"
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 ${headerH} flex items-center pointer-events-auto bg-gray-900/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none`}
      >
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Mobile Brand */}
            <motion.div variants={itemFade} className="md:hidden">
              <div
                className="font-bold text-lg"
                style={{
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Portfolio
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center justify-center w-full"
              variants={staggerFade} // ✨ Added
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={itemFade} // ✨ Added
                className="flex items-center rounded-full px-3 py-1"
                style={{
                  background: "rgba(14,26,47,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
                  transition: "box-shadow 220ms ease, transform 220ms ease",
                }}
              >
                <div className="flex items-center space-x-2 px-2">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <motion.button
                        key={section.id}
                        variants={itemFade} // ✨ Added
                        onClick={() => scrollToSection(section.id)}
                        className="flex items-center px-4 py-2 mx-1 my-1 rounded-full text-sm font-medium transition"
                        style={
                          isActive
                            ? {
                                background: gradient,
                                color: "#021021",
                                boxShadow:
                                  "0 8px 30px rgba(79,141,255,0.18), 0 0 18px rgba(95,141,255,0.10)",
                                border: "1px solid rgba(159,185,255,0.12)",
                                transform: "translateY(-1px)",
                              }
                            : { color: "rgb(203,213,225)" }
                        }
                      >
                        <span className="mr-2">{section.icon}</span>
                        <span>{section.label}</span>
                      </motion.button>
                    );
                  })}

                  {/* Resume Button */}
                  <motion.button
                    variants={itemFade} // ✨ Added
                    onClick={() =>
                      window.open("/resume/Resume_Ankit_Kumar.pdf", "_blank")
                    }
                    className="flex items-center ml-2 px-4 py-2 rounded-full text-sm font-medium shadow-md"
                    style={{
                      background: gradient,
                      color: "#021021",
                      boxShadow:
                        "0 10px 30px rgba(79,141,255,0.18), 0 0 18px rgba(95,141,255,0.08)",
                    }}
                  >
                    <FaDownload className="mr-2" />
                    Resume
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.div variants={itemFade} className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button p-2 rounded-full"
              >
                <svg
                  className="h-6 w-6 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mobile-menu-container fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-xs md:hidden"
          >
            <motion.div
              variants={staggerFade} // ✨ Added
              initial="hidden"
              animate="show"
              className="bg-[#071026cc] backdrop-blur-lg rounded-xl border border-[rgba(95,141,255,0.06)] overflow-hidden shadow-2xl"
            >
              <div className="p-3 space-y-1">
                {sections.map((section) => (
                  <motion.button
                    variants={itemFade} // ✨ Added
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-5 py-3 rounded-xl text-base font-medium transition ${
                      activeSection === section.id
                        ? "text-white"
                        : "text-gray-300 hover:bg-[rgba(255,255,255,0.03)]"
                    }`}
                    style={
                      activeSection === section.id
                        ? { background: gradient }
                        : undefined
                    }
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span>{section.label}</span>
                  </motion.button>
                ))}

                <motion.button
                  variants={itemFade} // ✨ Added
                  onClick={() =>
                    window.open("/resume/Resume_Ankit_Kumar.pdf", "_blank")
                  }
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-base font-medium"
                  style={{ background: gradient, color: "#021021" }}
                >
                  <FaDownload className="mr-3 text-lg" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
