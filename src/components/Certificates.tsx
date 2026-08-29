"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaJava } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs, SiCplusplus, SiTailwindcss, SiPostgresql, SiFastapi, SiPrisma, SiStripe, SiModal } from "react-icons/si";
import { certificates } from "../utils/certificatesData";

const Certificates = () => {
  const ref = useRef(null);

  const getSkillIcon = (skillName: string): React.ReactNode => {
    const skillIcons: { [key: string]: React.ReactNode } = {
      React: <FaReact className="w-5 h-5" style={{ color: "#61DAFB" }} />,
      Nextjs: <SiNextdotjs className="w-5 h-5" style={{ color: "#FFFFFF" }} />,
      "Node.js": <FaNodeJs className="w-5 h-5" style={{ color: "#68A063" }} />,
      MongoDB: <SiMongodb className="w-5 h-5" style={{ color: "#47A248" }} />,
      TypeScript: (
        <SiTypescript className="w-5 h-5" style={{ color: "#3178C6" }} />
      ),
      "C++": <SiCplusplus className="w-5 h-5" style={{ color: "#00599C" }} />,
      Python: <FaPython className="w-5 h-5" style={{ color: "#3776AB" }} />,
      AWS: <FaAws className="w-5 h-5" style={{ color: "#FF9900" }} />,
      "Tailwind CSS": <SiTailwindcss className="w-5 h-5" style={{ color: "#06B6D4" }} />,
      PostgreSQL: <SiPostgresql className="w-5 h-5" style={{ color: "#4169E1" }} />,
      Java: <FaJava className="w-5 h-5" style={{ color: "#ED8B00" }} />,
      FastAPI: <SiFastapi className="w-5 h-5" style={{ color: "#009688" }} />,
      Prisma: <SiPrisma className="w-5 h-5" style={{ color: "#5A67D8" }} />,
      Stripe: <SiStripe className="w-5 h-5" style={{ color: "#635BFF" }} />,
      Modal: <SiModal className="w-5 h-5" style={{ color: "#FFFFFF" }} />,
    };
    return skillIcons[skillName] || null;
  };

  return (
    <section id="certificates" className="w-full py-24 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            <span className="font-sans">Licenses &amp; </span>
            <span className="font-serif italic font-normal text-[#E1E0CC]">Certifications</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6 font-sans">
            Continuous learning and skill development through recognized courses
            and certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              className="group rounded-3xl overflow-hidden flex flex-col h-full bg-white/[0.02] border border-white/10 hover:border-[#E1E0CC]/40 shadow-lg hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-colors duration-300 will-change-transform"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,0.56) 60%)",
                  }}
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #FFFFFF, #BDBDBD)",
                      color: "#000000",
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {cert.title}
                </h3>

                <p className="text-text-secondary font-semibold mb-3">
                  {cert.issuer}
                </p>

                <p className="text-text-secondary text-sm mb-4">
                  {cert.description}
                </p>

                <div className="mt-auto pt-4">
                  <div className="mb-6 flex flex-wrap gap-2 min-h-[24px]">
                    {cert.skills.map((skill, skillIndex) => {
                      const Icon = getSkillIcon(skill);
                      return Icon ? (
                        <div key={skillIndex} className="relative">
                          <div className="w-6 h-6 flex items-center justify-center peer">
                            {Icon}
                          </div>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-0 pointer-events-none whitespace-nowrap z-50">
                            {skill}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100"></div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-3xl font-medium"
                    style={{
                      background: "linear-gradient(135deg, #1a1a2a, #2d2a2a)",
                      color: "#FFFFFF",
                      border: "1px solid #4A4A4A",
                    }}
                  >
                    <span className="text-white">View Certificate</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
