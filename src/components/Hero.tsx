"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-start pt-16 md:pt-20 relative overflow-hidden px-6"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 160, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 left-6 w-36 h-36 rounded-full opacity-10 blur-2xl"
          style={{
            background: "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
          }}
        />

        <motion.div
          animate={{ scale: [1.05, 0.95, 1.05], rotate: [0, -140, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-6 w-44 h-44 rounded-full opacity-10 blur-2xl"
          style={{
            background: "linear-gradient(90deg,#5F8DFF,#9A8DFF,#49BFC9)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          variants={staggerParent}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Left text */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                  style={{
                    background:
                      "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2L15 8l6 .5-4.5 3 1.5 6L12 15l-6 3.5L7 11 2.5 8.5 8 8 12 2z"
                    />
                  </svg>
                  Let's build something great
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            >
              Hello 👋, I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
                }}
              >
                Ankit Kumar
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                <div className="text-2xl md:text-3xl font-semibold text-gray-100">
                  <div className="h-10 md:h-12">
                    <Typewriter
                      options={{
                        strings: [
                          "Full-Stack Web Developer",
                          "React Enthusiast",
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
              className="text-sm md:text-base text-gray-300 max-w-xl"
            >
              CS & Data Analytics Student | Full Stack Web Developer | AI
              Enthusiast | Sub-Coordinator <b>@Pixelerate IITP CEP UG</b> |
              Trainee @VEDSEEN TECHNOLOGIES
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3 border-2 border-2xl rounded-2xl font-semibold text-white shadow-lg transition"
                  style={{
                    borderColor: "#5F8DFF",
                    color: "#9AB9FF",
                  }}
                >
                  View Projects
                </button>

                <a
                  href="/resume/Ankit_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl transition font-semibold text-center"
                  style={{
                    background:
                      "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
                  }}
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Get Resume
                </a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://github.com/ankit9241"
                  target="_blank"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-kumar-0435b8257/"
                  target="_blank"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-xl"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:ankitkumar.iitp09@gmail.com"
                  target="_blank"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right avatar */}
          <motion.div
            variants={fadeUp}
            className="hidden sm:flex md:col-span-5 lg:col-span-5 justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2"
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(15px)" }}
                animate={{ opacity: 0.4, filter: "blur(8px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
                }}
              />

              <div className="absolute inset-4 rounded-full bg-gray-800 overflow-hidden border-4 border-white/10">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  src="/assets/ankit-profile-bgless.png"
                  alt="Ankit Kumar"
                  className="w-full h-full object-cover"
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
