"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaUsers } from "react-icons/fa";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  skills: string[];
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
}

const experiences: ExperienceItem[] = [
  // {
  //   id: 1,
  //   role: "AI Developer Trainee",
  //   company: "VEDSEEM TECHNOLOGIES",
  //   period: "Dec 2025 – Present",
  //   skills: ["AI Development", "Machine Learning", "Problem Solving"],
  //   highlights: [
  //     "Currently undergoing onboarding and familiarizing with the company's AI development workflows.",
  //     "Learning and exploring tools and technologies used in internal AI/ML projects.",
  //     "Preparing to contribute to upcoming AI-driven solutions and product features.",
  //     "Building foundational understanding of model development, testing, and deployment processes.",
  //   ],
  //   icon: FaRobot,
  //   iconBg: "text-green-500",
  // },
  {
    id: 1,
    role: "Web Developer",
    company: "IIT Patna Web Development Team",
    period: "Sep 2025 – Present",
    skills: ["Web Development", "Responsive Design", "Team Collaboration"],
    highlights: [
      "Contributed to building the official IIT Patna Student Technical Council (STC) website as part of the College Development Team.",
      "Developed responsive and accessible UI components with modern web technologies.",
      "Ensured cross-browser compatibility and consistent user experience.",
      "Collaborated on both frontend features and backend integrations.",
    ],
    icon: FaLaptopCode,
    iconBg: "text-gray-300",
  },
  {
    id: 2,
    role: "Sub-Coordinator",
    company: "Pixelerate (STC)",
    period: "Aug 2025 – Present",
    skills: ["UI/UX Design", "Event Management", "Community Building"],
    highlights: [
      "Organized and judged multiple UI/UX design contests.",
      "Shared curated design and learning resources with the community.",
      "Planned and executed the annual Pixelerate design competition.",
    ],
    icon: FaUsers,
    iconBg: "text-gray-400",
  },


];

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="experience" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <motion.div className="text-center mb-16" style={{ opacity }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="inline-block">
              <span style={{ color: "#E5E5E5" }}>W</span>
              <span style={{ color: "#D5D5D5" }}>o</span>
              <span style={{ color: "#BDBDBD" }}>r</span>
              <span style={{ color: "#ADADAD" }}>k</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#E5E5E5" }}>E</span>
              <span style={{ color: "#D5D5D5" }}>x</span>
              <span style={{ color: "#BDBDBD" }}>p</span>
              <span style={{ color: "#ADADAD" }}>e</span>
              <span style={{ color: "#9D9D9D" }}>r</span>
              <span style={{ color: "#ADADAD" }}>i</span>
              <span style={{ color: "#BDBDBD" }}>e</span>
              <span style={{ color: "#D5D5D5" }}>n</span>
              <span style={{ color: "#E5E5E5" }}>c</span>
              <span style={{ color: "#D5D5D5" }}>e</span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#D5D5D5" }}
          >
            My professional journey and contributions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="w-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 transform-gpu will-change-transform" style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)",
              }}>

                {/* Content wrapper */}
                <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col bg-card-bg/90 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                    <div className={`p-2 sm:p-3 rounded-xl flex-shrink-0 bg-card-bg/50 backdrop-blur-sm border transition-all duration-300 transform-gpu`} style={{ borderColor: "rgba(255,255,255,0.1)", color: "#E5E5E5" }}>
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl sm:text-2xl font-extrabold leading-tight" style={{ color: "#FFFFFF" }}>
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <p className="text-sm sm:text-base font-medium" style={{ color: "#E5E5E5" }}>{exp.company}</p>
                        <span className="text-xs font-medium sm:px-3 sm:py-1 sm:rounded-full sm:border sm:transition-colors sm:duration-300 sm:whitespace-nowrap" style={{ color: "#BDBDBD", borderColor: "rgba(255,255,255,0.1)" }}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-2 flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border transition-all duration-300"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          borderColor: "rgba(255,255,255,0.15)",
                          color: "#D5D5D5"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold pl-4 inline-flex items-center mb-6 mt-4" style={{ color: "#E5E5E5" }}>
                      <svg className="w-5 h-5 mr-2" style={{ color: "#D5D5D5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      Key Contributions
                    </h4>
                    <ul className="space-y-3.5">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start group/item">
                          <span className="mr-3 mt-1.5 transform transition-transform duration-300" style={{ color: "#E5E5E5" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-base leading-relaxed transition-colors duration-300" style={{ color: "#D5D5D5" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
