"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../utils/experiencesData";
import { playClickSound, playCopySound } from "../utils/audio";

const INITIAL_VISIBLE = 3;

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const visibleTimeline = showAll ? experiences : experiences.slice(0, INITIAL_VISIBLE);
  const hasHiddenItems = experiences.length > INITIAL_VISIBLE;

  const copySectionLink = async () => {
    const shareUrl = `${window.location.origin}/#experience`;

    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
    }

    playCopySound();
  };

  const handleToggle = (index: number) => {
    playClickSound();
    setExpandedIndex(current => (current === index ? null : index));
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 md:px-12 py-16 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative pb-4 mb-10 flex justify-center w-full">
          <button
            type="button"
            onClick={copySectionLink}
            style={{
              cursor: "none",
            }}
            className="group inline-flex items-center justify-center gap-3 text-center focus:outline-hidden"
            aria-label="Copy experience section link"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-text-primary">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Experience
              </span>
            </h2>
          </button>
        </div>

        {/* Timeline Items */}
        <div className="w-full space-y-4">
          {visibleTimeline.map((exp, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="block w-full text-left focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-row items-center gap-4 sm:gap-5 w-full">
                    {/* Logo Box */}
                    <div className="h-14 w-14 rounded-2xl border border-[#2A2A2A] bg-[#161616] flex items-center justify-center font-bold text-lg text-white shadow-xs select-none shrink-0">
                      <img src={exp.image} alt={exp.company} className="w-full h-full object-cover rounded-2xl" />
                    </div>

                    {/* Details Column */}
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold leading-tight tracking-tight text-white truncate">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-[#BDBDBD]">
                          {exp.role}
                        </p>
                      </div>

                      {/* Right Side Info: Date */}
                      <div className="flex flex-col items-start sm:items-end text-left sm:text-right shrink-0">
                        <span className="text-sm font-semibold text-white">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Dropdown Chevron */}
                    <div className="text-neutral-400 shrink-0 ml-1">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 hover:text-white transition-colors" />
                      ) : (
                        <ChevronDown className="h-5 w-5 hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Section */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: 16 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden pt-4 border-t border-[#2A2A2A] space-y-4"
                    >
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-3 text-sm leading-6 text-[#BDBDBD]">
                            <span className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#666666]" />
                            <span className="font-sans text-neutral-300 tracking-tight">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.tags.map(tech => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-lg border border-[#2A2A2A] bg-[#161616] px-3 py-1 text-xs font-semibold text-white hover:border-neutral-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {hasHiddenItems && !showAll && (
          <div className="relative mt-8 flex justify-center pb-4">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-neutral-200 px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
            >
              View All
              <ArrowUpRight className="h-4 w-4 text-black" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
