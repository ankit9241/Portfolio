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
          className="object-cover"
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
            delay: 0.3,
          }}
          className="w-full md:w-5/12 lg:w-4/12 flex flex-col gap-4 sm:gap-5 pb-2 md:pb-6"
        >
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-white/90 font-semibold font-sans">
              Available for Internships &amp; OSS
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-4 my-1">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                273
              </h4>
              <p className="text-[8px] uppercase tracking-widest text-white/40 mt-1 font-mono">
                PR Reviews
              </p>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                19
              </h4>
              <p className="text-[8px] uppercase tracking-widest text-white/40 mt-1 font-mono">
                Repos
              </p>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                1842
              </h4>
              <p className="text-[8px] uppercase tracking-widest text-white/40 mt-1 font-mono">
                Contributions
              </p>
            </div>
          </div>

          <p className="text-white/70 text-xs sm:text-sm md:text-[15px] leading-relaxed font-sans font-light">
            Diving deep into Generative AI, Agentic systems, AI/ML, and NLP. I love
            exploring new tools, experimenting with emerging tech, and building
            things that make computers feel a little smarter.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-1">
            <button
              onClick={scrollToConnect}
              className="group bg-[#E1E0CC] hover:bg-white text-black rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-6 sm:gap-10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <span className="font-medium text-xs sm:text-sm tracking-wide font-sans">
                Let&apos;s Connect
              </span>
              <div className="bg-black text-[#E1E0CC] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={16} />
              </div>
            </button>

            <div className="flex sm:hidden items-center gap-1 p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
              <a
                href="https://github.com/ankit9241"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitkumar1109/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:ankitkumar.iitp09@gmail.com"
                onClick={() => playClickSound()}
                aria-label="Email Ankit"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#BDBDBD] hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
