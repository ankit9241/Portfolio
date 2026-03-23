"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import {
  FaHome,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <FaHome className="mr-2" /> },
  { id: "projects", label: "Projects", icon: <FaLaptopCode className="mr-2" /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope className="mr-2" /> },
];

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
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Mobile Brand */}
            <motion.div variants={itemFade} className="md:hidden">
              <div
                className="font-bold text-lg px-3 py-2 rounded-lg"
                style={{
                  background: "#111111",
                  WebkitBackgroundClip: "text",
                  color: "#F5F5F5",
                }}
              >
                Portfolio
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center justify-center w-full"
              variants={staggerFade}
              initial="hidden"
              animate="show"
            >
              <div className="flex items-center space-x-2 px-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      variants={itemFade}
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center px-4 py-2 mx-1 my-1 text-sm font-medium transition relative"
                      style={
                        isActive
                          ? {
                              color: "#FFFFFF",
                              position: "relative",
                            }
                          : { color: "#BDBDBD" }
                      }
                    >
                      <span>{section.label}</span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                          initial={{ width: 0 }}
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          style={{ transformOrigin: "left" }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Resume Button */}
                <motion.button
                  variants={itemFade}
                  onClick={() =>
                    window.open("/resume/Ankit_Kumar_Resume.pdf", "_blank")
                  }
                  className="flex items-center ml-2 px-4 py-2 rounded-full text-sm font-medium shadow-md"
                  style={{
                    background: "#F5F5F5",
                    color: "#111111",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </motion.button>
              </div>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.div variants={itemFade} className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut"
              }}
              className="fixed right-4 top-20 z-50 w-52 md:hidden backdrop-blur-lg bg-gray-900/20 border border-gray-700/30"
              style={{
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(255,255,255,0.05)",
              }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="p-3 space-y-1"
              >
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.03, duration: 0.2 }}
                    onClick={() => {
                      scrollToSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-end w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                    style={{
                      color: activeSection === section.id ? "#FFFFFF" : "#BDBDBD",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1A1A1A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {section.label}
                  </motion.button>
                ))}

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  style={{
                    height: "1px",
                    backgroundColor: "#333333",
                    margin: "8px 0",
                    transformOrigin: "right"
                  }}
                />

                {/* Resume Button */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  onClick={() =>
                    window.open("/resume/Resume_Ankit_Kumar.pdf", "_blank")
                  }
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: "#F5F5F5",
                    color: "#111111",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <Download className="mr-2 text-sm" />
                  Download Resume
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
