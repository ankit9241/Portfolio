"use client";
import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

import { Tooltip } from "react-tooltip";

import { Github } from "lucide-react";

export default function GithubStats() {
  const username = "ankit9241";
  const [totalCount, setTotalCount] = React.useState<number>(0);

  const calendarTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const handleTransformData = (data: Array<any>) => {
    const total = data.reduce((sum, activity) => sum + activity.count, 0);
    setTimeout(() => setTotalCount(total), 0);
    return data;
  };

  return (
    <section id="github" className="w-full py-24 px-6 md:px-12 text-white bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-center mb-12"
        >
          <span className="font-sans">GitHub </span>
          <span className="font-serif italic font-normal text-[#E1E0CC]">Activity</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 md:p-8 flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-8"
        >
          <div className="flex justify-between items-center w-full mb-6">
            <span className="text-sm font-semibold text-[#BDBDBD] tracking-wider uppercase">My Contributions</span>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:border-neutral-600 hover:text-white text-[#BDBDBD] text-xs font-semibold tracking-wide transition-all duration-200 shrink-0"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{username}</span>
            </a>
          </div>

          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] pb-2">
            <div className="min-w-[700px] flex justify-center">
              <GitHubCalendar
                username={username}
                blockSize={13}
                blockMargin={4}
                fontSize={14}
                theme={calendarTheme}
                showWeekdayLabels={true}
                showTotalCount={false}
                showColorLegend={false}
                transformData={handleTransformData}
                renderBlock={(block, activity) => {
                  return React.cloneElement(block, {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  });
                }}
              />
              <Tooltip
                id="github-tooltip"
                style={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  border: "1px solid #2A2A2A",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontFamily: "'Instrument Sans', sans-serif",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 pt-4 border-t border-[#2A2A2A] text-sm text-[#BDBDBD] gap-3">
            <span className="font-semibold">{totalCount} contributions in the last year</span>
            <div className="flex items-center gap-1.5 text-xs text-[#666666]">
              <span>Less</span>
              <span className="w-3 h-3 rounded-xs bg-[#161b22] border border-neutral-800" />
              <span className="w-3 h-3 rounded-xs bg-[#0e4429]" />
              <span className="w-3 h-3 rounded-xs bg-[#006d32]" />
              <span className="w-3 h-3 rounded-xs bg-[#26a641]" />
              <span className="w-3 h-3 rounded-xs bg-[#39d353]" />
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
