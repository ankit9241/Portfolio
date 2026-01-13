"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certificates = [
    {
      title: "Web Development - STC IIT Patna",
      issuer: "STC, IIT Patna",
      date: "Dec 2025",
      description:
        "Awarded during the Xenith event for contributing to the development and maintenance of the official website of the Student Technical Council (STC), IIT Patna, recognizing technical expertise and impactful contribution.",
      image: "/assets/iitp-certificate.png",
      link: "/assets/iitp-certificate.png",
      verified: true,
      skills: ["Nextjs", "TypeScript", "React"],
    },
    {
      title: "Hack N Tech 2.0 Hackathon",
      issuer: "IIT Patna",
      date: "Dec 2025",
      description:
        "Successfully participated in the Hack N Tech 2.0 Hackathon, organized by IIT Patna as part of the Xenith. Showcased problem-solving skills and technical abilities in a competitive environment.",
      image: "/assets/Hackathon2.0.jpeg",
      link: "/assets/Hackathon2.0.jpeg",
      verified: true,
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Hack N Tech Hackathon",
      issuer: "IIT Patna",
      date: "May 2025",
      description:
        "Successfully participated in the Hack N Tech Hackathon organized by IIT Patna, showcasing problem-solving skills and technical abilities in a competitive environment.",
      image: "/assets/Hackathon.png",
      link: "/assets/Hackathon.png",
      verified: true,
      skills: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="certificates" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#49BFC9 0%,#5F8DFF 50%,#9A8DFF 100%)",
            }}
          >
            Certificates & Achievements
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Continuous learning and skill development through recognized courses
            and certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 50, rotateX: -10 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(7,16,38,0.6)",
              }}
              className="group bg-[#071026] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(8,12,32,0.45)] transition-all duration-300"
              style={{ border: "1px solid rgba(95,141,255,0.06)" }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(7,10,20,0) 0%, rgba(7,16,38,0.56) 60%)",
                  }}
                />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[rgba(9,12,24,0.6)] rounded-full text-white hover:bg-[rgba(9,12,24,0.75)] transition"
                    aria-label={`Open ${cert.title}`}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <HiExternalLink className="w-6 h-6" />
                    </div>
                  </motion.a>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.25 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                >
                  <span
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg,#49BFC9,#5F8DFF)",
                      color: "#061026",
                    }}
                  >
                    {cert.date}
                  </span>

                  {cert.verified && (
                    <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[rgba(79,141,255,0.08)] text-[#C7D6FF] border border-[rgba(95,141,255,0.06)]">
                      <FaCheckCircle className="w-4 h-4 text-[#5F8DFF]" />
                      Verified
                    </span>
                  )}
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.18 }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {cert.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.28 }}
                  className="text-[#9FB8FF] font-semibold mb-3"
                >
                  {cert.issuer}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.38 }}
                  className="text-gray-300 text-sm mb-4"
                >
                  {cert.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.46 }}
                  className="mt-4 mb-6 flex flex-wrap gap-2"
                >
                  {cert.skills.map((skill, skillIndex) => {
                    const skillIcons: { [key: string]: JSX.Element } = {
                      'React': <FaReact className="w-4 h-4 text-[#61DAFB]" />,
                      'Nextjs': <SiNextdotjs className="w-4 h-4" />,
                      'Node.js': <FaNodeJs className="w-4 h-4 text-[#68A063]" />,
                      'MongoDB': <SiMongodb className="w-4 h-4 text-[#47A248]" />,
                      'TypeScript': <SiTypescript className="w-4 h-4 text-[#3178C6]" />
                    };

                    return (
                      <span 
                        key={skillIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0f172a] text-blue-300 border border-blue-900/50 hover:bg-[#1e293b] transition-colors duration-200"
                      >
                        {skillIcons[skill] || null}
                        {skill === 'Nextjs' ? 'Next.js' : skill}
                      </span>
                    );
                  })}
                </motion.div>

                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 + 0.56 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium"
                  style={{
                    background: "linear-gradient(90deg,#49BFC9,#5F8DFF)",
                    color: "#021021",
                    boxShadow: "0 10px 30px rgba(79,70,255,0.12)",
                  }}
                >
                  <span>View Certificate</span>
                  <HiExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
