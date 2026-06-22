"use client";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";

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
    <section id="github" className="py-20 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-text-primary mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            GitHub Contributions
          </span>
        </h2>

        <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 md:p-8 flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-8">
          {/* Top Row Header inside Card - Fixed and Responsive */}
          <div className="flex justify-between items-center w-full mb-6">
            <span className="text-sm font-semibold text-[#BDBDBD] tracking-wider uppercase">My Contributions</span>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:border-neutral-600 hover:text-white text-[#BDBDBD] text-xs font-semibold tracking-wide transition-all duration-200 shrink-0"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{username}</span>
            </a>
          </div>

          {/* Only the calendar grid scrolls horizontally - hidden scrollbars for clean mobile swiping */}
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
              />
            </div>
          </div>

          {/* Custom Fixed Footer - Responsive and Non-Scrolling */}
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
        </div>

        <div className="flex justify-center">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=111111&stroke=4A4A4A&ring=FFFFFF&fire=FF8A00&currStreakNum=FFFFFF&sideNums=BDBDBD&sideLabels=666666&dates=666666`}
              alt="GitHub Streak Stats"
              className="w-full max-w-[450px]"
            />
          </div>

          {/* <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=111111&title_color=FFFFFF&text_color=BDBDBD&icon_color=FFFFFF`}
              alt="GitHub Core Stats"
              className="w-full max-w-[450px]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
