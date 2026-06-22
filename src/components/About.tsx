"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProfileCard from "./ProfileCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="about" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-4xl md:text-5xl font-extrabold mb-4
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF, #888888)",
            }}
          >
            About Me
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <ProfileCard
            name="Ankit Kumar"
            title="Full Stack Developer"
            status="Open to new opportunities"
            avatarUrl="/assets/ankit-profile.svg"
          />
          {/* Clean text-only About */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-primary text-lg leading-relaxed"
              style={{ color: "#E5E5E5" }}
            >
              Hello! I'm <strong>Ankit Kumar</strong>, a second-year BSc (CSDA)
              student at IIT Patna. I'm a developer who enjoys building clean,
              practical full-stack applications using React, JavaScript,
              Tailwind CSS, and Node.js. I like working on products that look
              good, feel smooth, and solve real problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-text-secondary text-lg leading-relaxed"
              style={{ color: "#D5D5D5" }}
            >
              My work mixes academic problem-solving with hands-on development.
              I enjoy taking projects from concept to deployment and improving
              user experience through clean design and reliable functionality.
            </motion.p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pl-4 border-l-4 border-accent"
              style={{ borderLeftColor: "#BDBDBD" }}
            >
              <p className="text-text-secondary italic text-sm"
                style={{ color: "#ADADAD" }}>
                "I believe in writing clean code, learning continuously, and
                building things that are both useful and reliable."
              </p>
              <p className="text-text-subtle text-sm font-medium mt-3"
                style={{ color: "#9D9D9D" }}>
                - Ankit Kumar
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
