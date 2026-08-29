"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiVite,
  SiRender,
  SiFirebase,
  SiPython,
  SiNetlify,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiFigma,
  SiGit,
  SiGooglegemini,
  SiMysql,
  SiRadixui,
  SiFramer,
  SiAmazonwebservices,
  SiCanva,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiScipy,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuWorkflow } from "react-icons/lu";
import { MdAnimation } from "react-icons/md";
// import RotatingTechStack from "./RotatingTechStack";

const CursorIcon = (props: any) => (
  <img
    src="https://img.icons8.com/?size=512&id=DiGZkjCzyZXn&format=png&color=FFFFFF"
    alt="Cursor AI"
    className={props.className}
  />
);

const Skills = () => {
  // Animation variants
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  const stackCategories = [
    {
      id: "01",
      name: "Languages",
      skills: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
      ],
    },
    {
      id: "02",
      name: "Frontend Development",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap CSS", icon: SiBootstrap },
        { name: "Radix UI", icon: SiRadixui },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Lottie", icon: MdAnimation },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      id: "03",
      name: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      id: "04",
      name: "Databases & Data Layer",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      id: "05",
      name: "Cloud, DevOps & Deployment",
      skills: [
        { name: "AWS S3", icon: SiAmazonwebservices },
        { name: "Render", icon: SiRender },
        { name: "Netlify", icon: SiNetlify },
        { name: "Inngest", icon: LuWorkflow },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },
    {
      id: "06",
      name: "AI & Data Science",
      skills: [
        { name: "Gemini", icon: SiGooglegemini },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Matplotlib", icon: SiPlotly },
        { name: "Seaborn", icon: SiScipy },
      ],
    },
    {
      id: "07",
      name: "Design & Developer Tools",
      skills: [
        { name: "VS Code", icon: VscVscode },
        { name: "Cursor", icon: CursorIcon },
        { name: "Figma", icon: SiFigma },
        { name: "Canva", icon: SiCanva },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-16 md:py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/tech_bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/35 to-black pointer-events-none z-10" />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-center mb-12"
        >
          <span className="font-sans">Tech </span>
          <span className="font-serif italic font-normal text-[#E1E0CC]">Stack</span>
        </motion.h2>

        <div className="border-t border-[#2A2A2A] w-full">
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[#2a2a2a] py-4 items-center gap-4 md:gap-6"
            >
              <div className="flex items-center gap-3 text-base font-semibold">
                <span className="text-[#666666] font-mono tracking-wider">
                  {category.id}
                </span>
                <span className="text-[#BDBDBD]">
                  {category.name}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 text-white text-xs md:text-sm font-medium transition-all duration-200"
                    >
                      <Icon
                        className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0"
                      />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
