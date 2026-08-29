"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { playClickSound } from "../utils/audio";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="navbar-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-5 sm:top-6 left-5 sm:left-8 right-5 sm:right-8 z-50 pointer-events-none font-sans flex items-center justify-between"
        >
          <div className="hidden sm:flex pointer-events-auto items-center gap-1.5 px-2.5 h-11 sm:h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <a
              href="https://github.com/ankit9241"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              aria-label="GitHub Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitkumar1109/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              aria-label="LinkedIn Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:ankitkumar.iitp09@gmail.com"
              onClick={() => playClickSound()}
              aria-label="Email Ankit"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Mail size={17} />
            </a>
          </div>

          <div className="pointer-events-auto ml-auto">
            <a
              href="/resume/Ankit_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className="group/btn h-11 sm:h-12 bg-[#E1E0CC] hover:bg-white text-black rounded-full pl-5 pr-1.5 sm:pl-6 sm:pr-2 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.35)] cursor-pointer select-none"
            >
              <span className="font-medium text-xs sm:text-sm tracking-wide font-sans">
                Resume
              </span>
              <div className="bg-black text-[#E1E0CC] rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110">
                <ArrowUpRight size={15} />
              </div>
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
