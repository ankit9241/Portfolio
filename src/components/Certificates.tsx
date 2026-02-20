"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";
import { ExternalLink } from "lucide-react";
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
              backgroundImage: "linear-gradient(90deg, #FFFFFF, #BDBDBD)",
            }}
          >
            <span className="inline-block">
              <span style={{ color: "#F5F5F5" }}>C</span>
              <span style={{ color: "#E5E5E5" }}>e</span>
              <span style={{ color: "#D5D5D5" }}>r</span>
              <span style={{ color: "#C5C5C5" }}>t</span>
              <span style={{ color: "#B5B5B5" }}>i</span>
              <span style={{ color: "#A5A5A5" }}>f</span>
              <span style={{ color: "#959595" }}>i</span>
              <span style={{ color: "#858585" }}>c</span>
              <span style={{ color: "#757575" }}>a</span>
              <span style={{ color: "#656565" }}>t</span>
              <span style={{ color: "#555555" }}>e</span>
              <span style={{ color: "#454545" }}>s</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#F5F5F5" }}>&</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#F5F5F5" }}>A</span>
              <span style={{ color: "#E5E5E5" }}>c</span>
              <span style={{ color: "#D5D5D5" }}>h</span>
              <span style={{ color: "#C5C5C5" }}>i</span>
              <span style={{ color: "#B5B5B5" }}>e</span>
              <span style={{ color: "#A5A5A5" }}>v</span>
              <span style={{ color: "#959595" }}>e</span>
              <span style={{ color: "#858585" }}>m</span>
              <span style={{ color: "#757575" }}>e</span>
              <span style={{ color: "#656565" }}>n</span>
              <span style={{ color: "#555555" }}>t</span>
              <span style={{ color: "#454545" }}>s</span>
            </span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6">
            Continuous learning and skill development through recognized courses
            and certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group bg-card-bg rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              style={{ border: "1px solid #2A2A2A" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,0.56) 60%)",
                  }}
                />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-card-bg/90 backdrop-blur-sm rounded-full text-text-secondary hover:bg-card-bg transition border border-border-light"
                    aria-label={`Open ${cert.title}`}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </a>
                </div>

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

              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {cert.title}
                </h3>

                <p className="text-text-secondary font-semibold mb-3">
                  {cert.issuer}
                </p>

                <p className="text-text-secondary text-sm mb-4">
                  {cert.description}
                </p>

                <div className="mt-4 mb-6 flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => {
                    const skillIcons: { [key: string]: JSX.Element } = {
                      React: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
                      Nextjs: <SiNextdotjs className="w-4 h-4" />,
                      "Node.js": (
                        <FaNodeJs className="w-4 h-4 text-[#68A063]" />
                      ),
                      MongoDB: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
                      TypeScript: (
                        <SiTypescript className="w-4 h-4 text-[#3178C6]" />
                      ),
                    };

                    return (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-card-bg text-text-secondary border border-border-light hover:bg-card-bg/80 transition-colors duration-200"
                      >
                        {skillIcons[skill] || null}
                        {skill === "Nextjs" ? "Next.js" : skill}
                      </span>
                    );
                  })}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-3xl font-medium border-accent"
                  style={{
                    background: "#F5F5F5",
                    color: "#333333",
                  }}
                >
                  <span className="text-black">View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
