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
  SiGit,
  SiGithub,
  SiHoppscotch,
  SiVite,
  SiRender,
  SiFirebase,
  SiPython,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import RotatingTechStack from "./RotatingTechStack";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      category: "Backend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007acc",
      category: "Frontend",
    },
    { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "Frontend",
    },
    {
      name: "Bootstrap CSS",
      icon: SiBootstrap,
      color: "#7952B3",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#ffffff",
      category: "Backend",
    },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
    { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },
    { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tools" },
    {
      name: "Hoppscotch",
      icon: SiHoppscotch,
      color: "#8A4FFF",
      category: "Tools",
    },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools" },
    { name: "Render", icon: SiRender, color: "#FF0000", category: "Tools" },
    { name: "Firebase", icon: SiFirebase, color: "#FFC107", category: "Tools" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC", category: "Tools" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "Tools" },
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
            }}
          >
            My Skills & Technologies
          </h2>

          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{
              backgroundImage: "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
            }}
          />

          <p className="text-gray-200">
            Here are the technologies and tools I work with
          </p>
        </div>

        <RotatingTechStack />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            "Frontend Development",
            "Backend Development",
            "Tools & Platforms",
          ].map((category) => (
            <div
              key={category}
              className="
    w-full 
    md:max-w-[420px]
    lg:max-w-[500px]
    bg-[#0b1224]/70 
    backdrop-blur-md 
    rounded-2xl 
    p-8 
    transition-all 
    duration-300
  "
              style={{
                border: "1px solid rgba(95,141,255,0.10)",
                boxShadow: "0 0 22px rgba(95,141,255,0.10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(95,141,255,0.35)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(95,141,255,0.35), 0 0 60px rgba(154,141,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(95,141,255,0.10)";
                e.currentTarget.style.boxShadow =
                  "0 0 22px rgba(95,141,255,0.10)";
              }}
            >
              <h3
                className="text-2xl font-bold text-center"
                style={{ color: "#8FB7FF" }}
              >
                {category}
              </h3>

              <div
                className="w-full h-[2px] mt-3 mb-6 rounded-full"
                style={{ background: "rgba(95,141,255,0.15)" }}
              />

              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter((skill) => skill.category === category.split(" ")[0])
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-1 rounded-xl transition-all"
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: `${skill.color}22` }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </div>

                      <span className="text-gray-100 text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
