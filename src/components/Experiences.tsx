"use client";
import React, { useRef } from "react";
import { motion} from "framer-motion";
import { experiences } from "../utils/experiencesData";

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="flex-1"
              >
                <div className="bg-card-bg rounded-2xl p-8 shadow-xl border border-border-light">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-text-secondary mb-6">
                    {exp.period}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-accent text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="flex-1 lg:max-w-md"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  <img
                    src={`/assets/exp${exp.id}.png`}
                    alt={exp.company}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
