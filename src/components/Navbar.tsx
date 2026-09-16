"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SocialPill from "./SocialPill";
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
          <SocialPill className="hidden sm:flex" />

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
