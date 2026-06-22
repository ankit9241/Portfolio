"use client";

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
    <section id="skills" className="py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-text-primary mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Stack</span>
        </h2>

        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <RotatingTechStack />
        </motion.div> */}

        {/* Table Container */}
        <div className="border-t border-[#2A2A2A] w-full">
          {stackCategories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[#2a2a2a] py-4 items-center gap-4 md:gap-6"
            >
              {/* Left Column: Number + Category Name */}
              <div className="flex items-center gap-3 text-base font-semibold">
                <span className="text-[#666666] font-mono tracking-wider">
                  {category.id}
                </span>
                <span className="text-[#BDBDBD]">
                  {category.name}
                </span>
              </div>

              {/* Right Column: Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#2A2A2A] hover:border-neutral-600 hover:text-white text-white text-xs md:text-sm font-medium transition-all duration-200"
                    >
                      <Icon
                        className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0"
                      />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
