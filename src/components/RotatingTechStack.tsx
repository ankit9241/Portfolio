"use client";

import { FC, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiVite,
  SiGithub,
  SiExpress,
} from "react-icons/si";

interface SkillIcon {
  icon: any;
  color: string;
}

const rotatingSkills: SkillIcon[] = [
  { icon: SiHtml5, color: "#E5E5E5" },
  { icon: SiCss3, color: "#D5D5D5" },
  { icon: SiJavascript, color: "#BDBDBD" },
  { icon: SiTypescript, color: "#E5E5E5" },
  { icon: SiReact, color: "#D5D5D5" },
  { icon: SiTailwindcss, color: "#BDBDBD" },
  { icon: SiBootstrap, color: "#ADADAD" },
  { icon: SiNodedotjs, color: "#E5E5E5" },
  { icon: SiExpress, color: "#FFFFFF" },
  { icon: SiMongodb, color: "#D5D5D5" },
  { icon: SiPython, color: "#BDBDBD" },
  { icon: SiGithub, color: "#FFFFFF" },
  { icon: SiVite, color: "#BDBDBD" },
];

const RotatingTechStack: FC = () => {
  const rotation = useMotionValue(0);

  // FIX: Create counterRotate ONE TIME (not in map)
  const counterRotate = useTransform(rotation, (r) => -r);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    animate(rotation, 360, {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    });
  }, []);

  return (
    <section className="py-6 sm:py-10 w-full overflow-hidden px-4">
      <div className="relative w-full max-w-[90vw] sm:max-w-[480px] h-[250px] sm:h-[400px] md:h-[480px] mx-auto flex items-center justify-center">
        {/* Rotating Icons Ring */}
        <motion.div
          className="absolute w-full h-full"
          style={{ rotate: rotation }}
        >
          {rotatingSkills.map((skill, index) => {
            const angle = (index / rotatingSkills.length) * 2 * Math.PI;

            const radius = isMobile
              ? window.innerWidth < 400
                ? 115
                : 135
              : 180;

            const iconSize = isMobile ? 28 : 40;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  x: x - iconSize / 2,
                  y: y - iconSize / 2,
                  rotate: counterRotate, // FIXED
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{
                  scale: 1.25,
                  zIndex: 10,
                  transition: { duration: 0.2 },
                }}
              >
                <Icon
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 transition-transform duration-300"
                  style={{ color: skill.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center Circle */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center relative overflow-hidden group"
          initial={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          }}
          whileHover={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))",
            boxShadow: "0 0 30px rgba(255,255,255,0.2)",
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          <p className="text-white text-lg sm:text-2xl font-semibold">
            Tech Stack
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RotatingTechStack;
