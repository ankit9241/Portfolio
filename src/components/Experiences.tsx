"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaUsers, FaRobot } from "react-icons/fa";

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
  {
    id: 1,
    role: "AI Developer Trainee",
    company: "VEDSEEM TECHNOLOGIES",
    period: "Dec 2025 – Present",
    skills: ["AI Development", "Machine Learning", "Problem Solving"],
    highlights: [
      "Currently undergoing onboarding and familiarizing with the company's AI development workflows.",
      "Learning and exploring tools and technologies used in internal AI/ML projects.",
      "Preparing to contribute to upcoming AI-driven solutions and product features.",
      "Building foundational understanding of model development, testing, and deployment processes.",
    ],
    icon: FaRobot,
    iconBg: "text-green-500",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "IIT Patna Web Development Team",
    period: "Sep 2025 – Present",
    skills: ["Web Development", "Responsive Design", "Team Collaboration"],
    highlights: [
      "Contributed to building the official IIT Patna STC student council website as part of the college development team.",
      "Developed responsive and accessible UI components with modern web technologies.",
      "Ensured cross-browser compatibility and consistent user experience.",
      "Collaborated on both frontend features and backend integrations.",
    ],
    icon: FaLaptopCode,
    iconBg: "text-blue-500",
  },
  {
    id: 3,
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
    iconBg: "text-purple-500",
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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#49BFC9] via-[#5F8DFF] to-[#9A8DFF] bg-clip-text text-transparent"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
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
              <div className="w-full rounded-xl p-px overflow-hidden transition-all duration-500 group relative bg-gradient-to-br from-[#5F8DFF30] via-[#9A8DFF30] to-[#5F8DFF30] hover:from-[#5F8DFF40] hover:via-[#9A8DFF40] hover:to-[#5F8DFF40] shadow-[0_4px_20px_rgba(95,141,255,0.1)] hover:shadow-[0_8px_40px_rgba(154,141,255,0.3)] hover:-translate-y-1 hover:scale-[1.01] transform-gpu will-change-transform before:absolute before:inset-0 before:rounded-xl before:bg-gray-900 before:z-0 before:transition-all before:duration-500 before:opacity-0 group-hover:before:opacity-100">
                {/* Enhanced Glow effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(95,141,255,0.25)_0%,_rgba(154,141,255,0.15)_50%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(95,141,255,0.15)_0%,_rgba(154,141,255,0.08)_40%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                    animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}></div>
                </div>
                <style>{`
                  @keyframes pulse {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.02); }
                  }
                `}</style>
                
                {/* Content wrapper */}
                <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col bg-gray-900/90 rounded-[11px] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#5F8DFF]/10 group-hover:to-[#5F8DFF]/5 backdrop-blur-[1px] group-hover:backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                    <div className={`p-2 sm:p-3 rounded-xl flex-shrink-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-[#5F8DFF]/30 group-hover:scale-105 ${exp.iconBg} bg-opacity-20 transition-all duration-300 transform-gpu`}>
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <p className="text-[#5F8DFF] text-sm sm:text-base font-medium">{exp.company}</p>
                        <span className="text-xs text-gray-400 font-medium sm:text-gray-300 sm:bg-gray-800/90 sm:px-3 sm:py-1 sm:rounded-full sm:border sm:border-gray-700/50 sm:group-hover:border-[#5F8DFF]/50 sm:transition-colors sm:duration-300 sm:whitespace-nowrap">
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
                        className="text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gray-800/60 text-gray-200 border border-gray-700/50 group-hover:border-[#5F8DFF]/40 group-hover:bg-gray-800/80 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold pl-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5F8DFF] to-[#9A8DFF] inline-flex items-center mb-6 mt-4">
                      <svg className="w-5 h-5 mr-2 text-[#5F8DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      Key Contributions
                    </h4>
                    <ul className="space-y-3.5">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start group/item">
                          <span className="text-[#5F8DFF] mr-3 mt-1.5 transform group-hover/item:scale-110 transition-transform duration-300">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="text-gray-300 text-base leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#5F8DFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                       style={{
                         boxShadow: '0 0 15px 1px rgba(95, 141, 255, 0.5)'
                       }}></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-[#5F8DFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                       style={{
                         boxShadow: '0 0 15px 1px rgba(95, 141, 255, 0.5)'
                       }}></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#5F8DFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                       style={{
                         boxShadow: '0 0 15px 1px rgba(95, 141, 255, 0.5)'
                       }}></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-[#5F8DFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                       style={{
                         boxShadow: '0 0 15px 1px rgba(95, 141, 255, 0.5)'
                       }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
