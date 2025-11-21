"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProfileCard from "./ProfileCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
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
              bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF]
              bg-clip-text text-transparent
            "
          >
            About Me
          </h2>
          <div
            className="
              w-28 h-1 rounded-full mx-auto
              bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF]
            "
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <ProfileCard
            name="Ankit Kumar"
            title="Full Stack Developer"
            status="Open to new opportunities"
            contactText="Contact Me"
            avatarUrl="/assets/ankit-profile-bgless.png"
            onContactClick={() => {
              const recipient = "ankitkumar.iitp09@gmail.com";
              const subject = "Contact from Portfolio";
              const body =
                "Hello Ankit,%0D%0A%0D%0AI came across your portfolio and would like to get in touch.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]";
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  recipient
                )}&su=${encodeURIComponent(subject)}&body=${body}`,
                "_blank"
              );
            }}
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
              className="text-white text-lg leading-relaxed"
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
              className="text-gray-300 text-lg leading-relaxed"
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
              className="pl-4 border-l-4 border-[#6366f1]"
            >
              <p className="text-gray-300 italic text-sm">
                "I believe in writing clean code, learning continuously, and
                building things that are both useful and reliable."
              </p>
              <p className="text-gray-200 text-sm font-medium mt-3">
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
