"use client";
import { useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";
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
    };
    return skillIcons[skillName] || null;
  };

  return (
    <section id="certificates" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFFFFF, #888888)",
            }}
          >
            Certificates & Achievements
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6">
            Continuous learning and skill development through recognized courses
            and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                background: "transparent",
                border: "1px solid #2A2A2A",
              }}
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
                    const Icon = getSkillIcon(skill);
                    return Icon ? (
                      <div key={skillIndex} className="relative">
                        <div className="w-6 h-6 flex items-center justify-center peer">
                          {Icon}
                        </div>
                        {/* Custom Tooltip */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
