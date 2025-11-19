"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiDownload, HiEye } from "react-icons/hi";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Resume_Ankit_Kumar.pdf";
    link.download = "Resume_Ankit_Kumar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("/resume/Resume_Ankit_Kumar.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-5xl md:text-6xl font-extrabold mb-4
              bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF]
              bg-clip-text text-transparent
            "
          >
            Resume
          </h2>
          <div
            className="
              w-24 h-1 rounded-full mx-auto
              bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF]
            "
          ></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Explore my professional experience, skills, and projects.
          </p>
        </motion.div>

        {/* Premium Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            bg-[#0A0F1F]/90
            backdrop-blur-xl
            rounded-3xl
            p-8 md:p-10
            border border-[#49BFC9]/25
            shadow-[0_0_20px_rgba(73,191,201,0.2)]
            hover:shadow-[0_0_40px_rgba(73,191,201,0.25)]
            transition-all duration-500
            max-w-3xl mx-auto
          "
        >
          {/* Name & Title */}
          <div className="text-center md:text-left mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
              Ankit Kumar
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Passionate Full Stack Developer skilled in building scalable, user-friendly web applications. This resume highlights my experience, key projects, and certifications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(73,191,201,0.4)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownload}
              className="
                flex items-center gap-2
                px-6 py-2
                bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF]
                text-white font-medium
                rounded-lg
                transition-all
              "
            >
              <HiDownload className="w-4 h-4" /> Download
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(95,141,255,0.3)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleView}
              className="
                flex items-center gap-2
                px-6 py-2
                border-2 border-[#49BFC9]
                text-[#49BFC9]
                rounded-lg
                hover:bg-[#5F8DFF]
                hover:text-white
                transition-all
              "
            >
              <HiEye className="w-4 h-4" /> Preview
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6">
            {["2+", "5+", "1"].map((value, i) => {
              const labels = ["Years Experience", "Projects Completed", "Certifications"];
              return (
                <div
                  key={i}
                  className="
                    bg-[#0D1A2B]/50 backdrop-blur-md p-4 rounded-xl
                    border border-[#49BFC9]/15
                  "
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#49BFC9] mb-1">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">{labels[i]}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center md:text-left">
            Last updated: August 2025 • PDF Format • 1 Page
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            Questions about my experience? Reach out via the contact form below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
