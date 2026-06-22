"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import OptimizedImage from "./OptimizedImage";
import { playClickSound } from "../utils/audio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-start pt-16 md:pt-20 relative overflow-hidden px-6 md:px-12"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 160, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 left-6 w-36 h-36 rounded-full opacity-10 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05), transparent 60%)",
          }}
        />

        <motion.div
          animate={{ scale: [1.05, 0.95, 1.05], rotate: [0, -140, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-6 w-44 h-44 rounded-full opacity-10 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          variants={staggerParent}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Left Content - Separate Container */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6">

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-text-primary"
            >
              Hello, I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FFFFFF, #BDBDBD)",
                }}
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Ankit Kumar
                </span>
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                <div className="text-2xl md:text-3xl font-semibold text-text-subtle">
                  <div className="h-10 md:h-12">
                    <Typewriter
                      options={{
                        strings: [
                          "Full-Stack Web Developer",
                          "Software Engineer",
                          "Problem Solver",
                          "UI/UX Designer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        cursor: "_",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-text-secondary max-w-xl"
            >
              CS & Data Analytics Student | Full Stack Web Developer | MERN
              Stack | Passionate about crafting seamless user experiences and
              building scalable web applications.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={() => { playClickSound(); scrollToProjects(); }}
                  className="px-6 py-3 rounded-3xl font-semibold text-text-primary shadow-lg transition backdrop-blur-lg"
                  style={{
                    background: "linear-gradient(135deg, #1a1a2a, #2d2a2a)",
                    color: "#FFFFFF",
                    border: "1px solid #4A4A4A",
                  }}
                >
                  View Projects
                </button>

                <a
                  href="/resume/Ankit_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-3xl transition font-semibold text-center"
                  style={{
                    background: "#F5F5F5",
                    color: "#000000",
                  }}
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://github.com/ankit9241"
                  target="_blank"
                  onClick={() => playClickSound()}
                  className="p-2 rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-lg text-text-secondary hover:text-text-primary"
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankitkumar1109/"
                  target="_blank"
                  onClick={() => playClickSound()}
                  className="p-2 rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-lg text-text-secondary hover:text-text-primary"
                >
                  <Linkedin />
                </a>

                <a
                  href="mailto:ankitkumar.iitp09@gmail.com"
                  target="_blank"
                  onClick={() => playClickSound()}
                  className="p-2 rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-lg text-text-secondary hover:text-text-primary"
                >
                  <Mail />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image - Separate Container */}
          <motion.div
            variants={fadeUp}
            className="hidden sm:flex md:col-span-5 lg:col-span-5 justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-2"
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(15px)" }}
                animate={{ opacity: 0.4, filter: "blur(8px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(137, 170, 204, 0.2), rgba(78, 133, 191, 0.3))",
                }}
              />

              <div className="absolute inset-x-0 inset-y-0 rounded-2xl bg-surface-dark overflow-hidden">
                <OptimizedImage
                  src="/assets/ankit-profile.svg"
                  alt="Ankit Kumar"
                  priority={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 180px, 220px"
                  className="scale-110"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Crect width='220' height='220' fill='%231a1a1a'/%3E%3C/svg%3E"
                />
                {/* Smooth inwards gradient overlay from all 4 sides */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: "inset 0 0 100px 50px #111111, inset 0 -80px 120px 40px #111111"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
