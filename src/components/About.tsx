"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface RevealWordsProps {
  text: string;
  className?: string;
  delay?: number;
}

function RevealWords({
  text,
  className = "",
  delay = 0,
}: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.025,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.2, y: 4, filter: "blur(2px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.4, ease: easeCurve },
            },
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            <span className="font-sans">About </span>
            <span className="font-serif italic font-normal text-[#E1E0CC]">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto select-none overflow-hidden">
              <img
                src="/assets/profile-ankit.png"
                alt="Ankit Kumar"
                className="w-full h-auto object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-black/35 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-black/35 to-transparent pointer-events-none" />
            </div>

            <div className="mt-5 text-center w-full">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                <span className="font-sans">Ankit </span>
                <span className="font-serif italic text-[#E1E0CC]">Kumar</span>
              </h3>
              <p className="text-xs uppercase font-mono tracking-widest text-[#888888] mt-1">
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mt-4 justify-center w-full">
              <a
                href="https://github.com/ankit9241"
                target="_blank"
                rel="me noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/ankitkumar1109/"
                target="_blank"
                rel="me noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:ankitkumar.iitp09@gmail.com"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-8 flex flex-col justify-center self-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: easeCurve, delay: 0.08 }}
              className="text-[#E5E5E5] text-lg sm:text-xl leading-relaxed font-sans text-center"
            >
              Hello! I&apos;m <strong className="text-white font-semibold">Ankit Kumar</strong>, a third-year BS (CSDA)
              student at <strong className="text-white font-semibold">IIT Patna</strong>. I&apos;m a developer who enjoys building clean,
              practical full-stack applications using React, JavaScript,
              Tailwind CSS, and Node.js. I like working on products that look
              good, feel smooth, and solve real problems.
            </motion.p>

            <RevealWords
              text="My work mixes academic problem-solving with hands-on development. I enjoy taking projects from concept to deployment and improving user experience through clean design and reliable functionality."
              className="text-[#D5D5D5] text-lg sm:text-xl leading-relaxed font-sans text-center"
              delay={0.12}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: easeCurve, delay: 0.18 }}
              className="text-center max-w-xl mx-auto"
            >
              <p className="text-[#ADADAD] italic text-base font-sans">
                &ldquo;I believe in writing clean code, learning continuously, and
                building things that are both useful and reliable.&rdquo;
              </p>
              <p className="text-[#9D9D9D] text-xs font-mono tracking-wider uppercase mt-2">
                — Ankit Kumar
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
