"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { playClickSound } from "../utils/audio";

interface SocialPillProps {
  className?: string;
  tooltipPosition?: "top" | "bottom";
}

export default function SocialPill({
  className = "",
  tooltipPosition = "bottom",
}: SocialPillProps) {
  const isTop = tooltipPosition === "top";

  return (
    <div
      className={`pointer-events-auto inline-flex items-center gap-2 px-3 h-11 sm:h-12 rounded-full bg-black/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <a
        href="https://github.com/ankit9241"
        target="_blank"
        rel="me noopener noreferrer"
        onClick={() => playClickSound()}
        aria-label="GitHub Profile"
        className="group/icon relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-[#E1E0CC] hover:bg-white/15 transition-all duration-200"
      >
        <Github size={17} />
        <span
          className={`absolute ${
            isTop ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 ${
            isTop ? "translate-y-1" : "-translate-y-1"
          } group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50`}
        >
          GitHub
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/ankitkumar1109/"
        target="_blank"
        rel="me noopener noreferrer"
        onClick={() => playClickSound()}
        aria-label="LinkedIn Profile"
        className="group/icon relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-[#E1E0CC] hover:bg-white/15 transition-all duration-200"
      >
        <Linkedin size={17} />
        <span
          className={`absolute ${
            isTop ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 ${
            isTop ? "translate-y-1" : "-translate-y-1"
          } group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50`}
        >
          LinkedIn
        </span>
      </a>

      <a
        href="https://leetcode.com/u/ankit9241/"
        target="_blank"
        rel="me noopener noreferrer"
        onClick={() => playClickSound()}
        aria-label="LeetCode Profile"
        className="group/icon relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-[#E1E0CC] hover:bg-white/15 transition-all duration-200"
      >
        <SiLeetcode size={16} />
        <span
          className={`absolute ${
            isTop ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 ${
            isTop ? "translate-y-1" : "-translate-y-1"
          } group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50`}
        >
          LeetCode
        </span>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitkumar.iitp09@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playClickSound()}
        aria-label="Email Ankit"
        className="group/icon relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-[#E1E0CC] hover:bg-white/15 transition-all duration-200"
      >
        <Mail size={17} />
        <span
          className={`absolute ${
            isTop ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 ${
            isTop ? "translate-y-1" : "-translate-y-1"
          } group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50`}
        >
          Email
        </span>
      </a>
    </div>
  );
}
