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
  // SiGit,
  SiGithub,
  // SiHoppscotch,
  SiVite,
  SiRender,
  SiFirebase,
  SiPython,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import RotatingTechStack from "./RotatingTechStack";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E5E5E5", category: "Frontend" },
    { name: "CSS3", icon: SiCss3, color: "#D5D5D5", category: "Frontend" },
    { name: "React", icon: SiReact, color: "#D5D5D5", category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#BDBDBD",
      category: "Frontend",
    },
    {
      name: "Bootstrap CSS",
      icon: SiBootstrap,
      color: "#ADADAD",
      category: "Frontend",
    },
    { name: "Vite", icon: SiVite, color: "#BDBDBD", category: "Frontend" },

    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#E5E5E5",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#FFFFFF",
      category: "Backend",
    },
    { name: "MongoDB", icon: SiMongodb, color: "#D5D5D5", category: "Backend" },
    { name: "Firebase", icon: SiFirebase, color: "#E5E5E5", category: "Backend" },
    { name: "Python", icon: SiPython, color: "#BDBDBD", category: "Backend" },

    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#BDBDBD",
      category: "Languages",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#E5E5E5",
      category: "Languages",
    },
    // { name: "Git", icon: SiGit, color: "#E5E5E5", category: "Tools" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF", category: "Tools" },
    // {
    //   name: "Hoppscotch",
    //   icon: SiHoppscotch,
    //   color: "#D5D5D5",
    //   category: "Tools",
    // },
    { name: "Render", icon: SiRender, color: "#ADADAD", category: "Tools" },
    { name: "VS Code", icon: VscVscode, color: "#D5D5D5", category: "Tools" },
    { name: "Netlify", icon: SiNetlify, color: "#BDBDBD", category: "Tools" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="inline-block">
              <span style={{ color: "#E5E5E5" }}>M</span>
              <span style={{ color: "#D5D5D5" }}>y</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#E5E5E5" }}>S</span>
              <span style={{ color: "#D5D5D5" }}>k</span>
              <span style={{ color: "#BDBDBD" }}>i</span>
              <span style={{ color: "#ADADAD" }}>l</span>
              <span style={{ color: "#9D9D9D" }}>l</span>
              <span style={{ color: "#ADADAD" }}>s</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#E5E5E5" }}>&</span>
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#E5E5E5" }}>T</span>
              <span style={{ color: "#D5D5D5" }}>e</span>
              <span style={{ color: "#BDBDBD" }}>c</span>
              <span style={{ color: "#ADADAD" }}>h</span>
              <span style={{ color: "#9D9D9D" }}>n</span>
              <span style={{ color: "#ADADAD" }}>o</span>
              <span style={{ color: "#BDBDBD" }}>l</span>
              <span style={{ color: "#D5D5D5" }}>o</span>
              <span style={{ color: "#E5E5E5" }}>g</span>
              <span style={{ color: "#D5D5D5" }}>i</span>
              <span style={{ color: "#BDBDBD" }}>e</span>
              <span style={{ color: "#ADADAD" }}>s</span>
            </span>
          </h2>

          <p className="text-text-secondary">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        {/* Rotating Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <RotatingTechStack />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            "Frontend Development",
            "Backend Development",
            "Languages & Tools",
          ].map((category) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="
                w-full 
                md:max-w-[420px]
                lg:max-w-[500px]
                bg-card-bg 
                backdrop-blur-md 
                rounded-2xl 
                p-8 
                transition-all 
                duration-300
              "
              style={{
                border: "none",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)",
              }}
            >
              <h3 className="text-2xl font-bold text-center">
                {category === "Frontend Development" && (
                  <span className="inline-block">
                    <span style={{ color: "#E5E5E5" }}>F</span>
                    <span style={{ color: "#D5D5D5" }}>r</span>
                    <span style={{ color: "#BDBDBD" }}>o</span>
                    <span style={{ color: "#ADADAD" }}>n</span>
                    <span style={{ color: "#9D9D9D" }}>t</span>
                    <span style={{ color: "#ADADAD" }}>e</span>
                    <span style={{ color: "#BDBDBD" }}>n</span>
                    <span style={{ color: "#D5D5D5" }}>d</span>
                    <span style={{ color: "#FFFFFF" }}> </span>
                    <span style={{ color: "#E5E5E5" }}>D</span>
                    <span style={{ color: "#D5D5D5" }}>e</span>
                    <span style={{ color: "#BDBDBD" }}>v</span>
                    <span style={{ color: "#ADADAD" }}>e</span>
                    <span style={{ color: "#9D9D9D" }}>l</span>
                    <span style={{ color: "#ADADAD" }}>o</span>
                    <span style={{ color: "#BDBDBD" }}>p</span>
                    <span style={{ color: "#D5D5D5" }}>m</span>
                    <span style={{ color: "#E5E5E5" }}>e</span>
                    <span style={{ color: "#D5D5D5" }}>n</span>
                    <span style={{ color: "#BDBDBD" }}>t</span>
                  </span>
                )}
                {category === "Backend Development" && (
                  <span className="inline-block">
                    <span style={{ color: "#E5E5E5" }}>B</span>
                    <span style={{ color: "#D5D5D5" }}>a</span>
                    <span style={{ color: "#BDBDBD" }}>c</span>
                    <span style={{ color: "#ADADAD" }}>k</span>
                    <span style={{ color: "#9D9D9D" }}>e</span>
                    <span style={{ color: "#ADADAD" }}>n</span>
                    <span style={{ color: "#BDBDBD" }}>d</span>
                    <span style={{ color: "#FFFFFF" }}> </span>
                    <span style={{ color: "#E5E5E5" }}>D</span>
                    <span style={{ color: "#D5D5D5" }}>e</span>
                    <span style={{ color: "#BDBDBD" }}>v</span>
                    <span style={{ color: "#ADADAD" }}>e</span>
                    <span style={{ color: "#9D9D9D" }}>l</span>
                    <span style={{ color: "#ADADAD" }}>o</span>
                    <span style={{ color: "#BDBDBD" }}>p</span>
                    <span style={{ color: "#D5D5D5" }}>m</span>
                    <span style={{ color: "#E5E5E5" }}>e</span>
                    <span style={{ color: "#D5D5D5" }}>n</span>
                    <span style={{ color: "#BDBDBD" }}>t</span>
                  </span>
                )}
                {category === "Languages & Tools" && (
                  <span className="inline-block">
                    <span style={{ color: "#E5E5E5" }}>L</span>
                    <span style={{ color: "#D5D5D5" }}>a</span>
                    <span style={{ color: "#BDBDBD" }}>n</span>
                    <span style={{ color: "#ADADAD" }}>g</span>
                    <span style={{ color: "#9D9D9D" }}>u</span>
                    <span style={{ color: "#ADADAD" }}>a</span>
                    <span style={{ color: "#BDBDBD" }}>g</span>
                    <span style={{ color: "#D5D5D5" }}>e</span>
                    <span style={{ color: "#E5E5E5" }}>s</span>
                    <span style={{ color: "#FFFFFF" }}> </span>
                    <span style={{ color: "#E5E5E5" }}>&</span>
                    <span style={{ color: "#FFFFFF" }}> </span>
                    <span style={{ color: "#E5E5E5" }}>T</span>
                    <span style={{ color: "#D5D5D5" }}>o</span>
                    <span style={{ color: "#BDBDBD" }}>o</span>
                    <span style={{ color: "#ADADAD" }}>l</span>
                    <span style={{ color: "#9D9D9D" }}>s</span>
                  </span>
                )}
              </h3>

              <div
                className="w-full h-[2px] mt-3 mb-6 rounded-full"
                style={{ background: "#2A2A2A" }}
              />

              {/* Skill Items */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {skills
                  .filter((skill) => 
                    category === "Languages & Tools" 
                      ? skill.category === "Languages" || skill.category === "Tools"
                      : skill.category === category.split(" ")[0]
                  )
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemFade}
                      className="flex items-center gap-3 px-3 py-1 rounded-xl transition-all hover:bg-elevated-surface"
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${skill.color}22`,
                          border: "1px solid #2A2A2A",
                        }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </div>

                      <span
                        className="text-sm font-medium"
                        style={{ color: "#E5E5E5" }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
