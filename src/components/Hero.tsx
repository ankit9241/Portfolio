"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SeamlessLoopVideo from "./SeamlessLoopVideo";
import heroPoster from "../assets/hero-frame.jpg";
import { playClickSound } from "../utils/audio";
import Navbar from "./Navbar";

const HERO_VIDEO_SRC = "/videos/hero-cabin-living-v3.mp4";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle mouse parallax on content only (max 2-3px)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = !window.matchMedia("(pointer: fine)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const ox = (e.clientX / window.innerWidth - 0.5) * 4;
      const oy = (e.clientY / window.innerHeight - 0.5) * 4;
      setMouseOffset({ x: ox, y: oy });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.5, 0]);

  const scrollToConnect = () => {
    playClickSound();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    playClickSound();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden select-none"
    >
      <Navbar />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <SeamlessLoopVideo
          src={HERO_VIDEO_SRC}
          poster={heroPoster}
          fade={0.8}
          className="object-cover object-[90%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85 z-10 pointer-events-none" />

        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(130% 100% at 50% 50%, transparent 40%, rgba(10, 10, 10, 0.6) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
        className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 lg:p-16 w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 transition-transform duration-200 ease-out pointer-events-auto"
      >
        <div className="w-full md:w-7/12 lg:w-8/12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="text-[#E1E0CC] text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw] font-medium leading-[0.85] tracking-[-0.07em] font-sans select-none"
          >
            Ankit
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.25,
          }}
          className="w-full md:w-5/12 lg:w-[410px] xl:w-[450px] flex flex-col gap-5 sm:gap-6 pb-2 md:pb-4 max-w-lg"
        >
          <div className="space-y-2.5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-white/45 select-none"
            >
              CURRENTLY BUILDING
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.4rem] font-medium tracking-[-0.025em] text-[#E1E0CC] font-sans leading-[1.15] [text-shadow:0_2px_16px_rgba(0,0,0,0.85)] max-w-sm sm:max-w-md"
            >
              <span className="block">AI-powered products</span>
              <span className="block text-white/90">that solve real problems.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="pt-1 text-xs sm:text-[13px] text-white/50 font-sans tracking-wide [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
            >
              Full-stack development × Artificial Intelligence
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="flex flex-col gap-3 pt-2 sm:pt-3"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-nowrap">
              <button
                onClick={scrollToProjects}
                className="group h-10 sm:h-12 bg-[#E1E0CC] text-black rounded-full pl-3.5 sm:pl-6 pr-1 sm:pr-2 flex items-center justify-between gap-2 sm:gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.35)] cursor-pointer select-none whitespace-nowrap"
              >
                <span className="font-medium text-[11px] sm:text-sm tracking-wide font-sans">
                  View Projects
                </span>
                <div className="bg-black text-[#E1E0CC] rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px]" />
                </div>
              </button>

              <button
                onClick={scrollToConnect}
                className="group h-10 sm:h-12 bg-black text-[#E1E0CC] border border-white/15 rounded-full pl-3.5 sm:pl-6 pr-1 sm:pr-2 flex items-center justify-between gap-2 sm:gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer select-none whitespace-nowrap"
              >
                <span className="font-medium text-[11px] sm:text-sm tracking-wide font-sans">
                  Let&apos;s Connect
                </span>
                <div className="bg-[#E1E0CC] text-black rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px]" />
                </div>
              </button>
            </div>

            <div className="flex sm:hidden justify-center pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
                <a
                  href="https://github.com/ankit9241"
                  target="_blank"
                  rel="me noopener noreferrer"
                  onClick={() => playClickSound()}
                  aria-label="GitHub Profile"
                  className="group/social relative w-9 h-9 rounded-full flex items-center justify-center text-[#E1E0CC] hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
                >
                  <Github size={17} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 translate-y-1 group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ankitkumar1109/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  onClick={() => playClickSound()}
                  aria-label="LinkedIn Profile"
                  className="group/social relative w-9 h-9 rounded-full flex items-center justify-center text-[#E1E0CC] hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
                >
                  <Linkedin size={17} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 translate-y-1 group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="mailto:ankitkumar.iitp09@gmail.com"
                  onClick={() => playClickSound()}
                  aria-label="Email Ankit"
                  className="group/social relative w-9 h-9 rounded-full flex items-center justify-center text-[#E1E0CC] hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
                >
                  <Mail size={17} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-[#E1E0CC] bg-black/95 backdrop-blur-xl border border-white/15 shadow-lg opacity-0 translate-y-1 group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
