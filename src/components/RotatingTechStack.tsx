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
  { icon: SiHtml5, color: "#E34F26" },
      { icon: SiCss3, color: "#1572B6" },
      {
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        icon: SiTypescript,
        color: "#007acc",
      },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiTailwindcss, color: "#06B6D4" },
      { icon: SiBootstrap, color: "#7952B3" },
      { icon: SiNodedotjs, color: "#339933" },
      { icon: SiExpress, color: "#ffffff" },
      { icon: SiMongodb, color: "#47A248" },
      { icon: SiPython, color: "#3776AB" },
      { icon: SiGithub, color: "#ffffff" },
      { icon: SiVite, color: "#646CFF" },
];

const RotatingTechStack: FC = () => {
  const rotation = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    animate(rotation, 360, {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    });
  }, []);

  return (
    <section className="py-12 sm:py-20 w-full overflow-hidden px-4">
      <div className="relative w-full max-w-[90vw] sm:max-w-[480px] h-[250px] sm:h-[400px] md:h-[480px] mx-auto flex items-center justify-center">
        {/* Rotating Ring */}
        <motion.div
          className="absolute w-full h-full"
          style={{ rotate: rotation }}
        >
          {rotatingSkills.map((skill, index) => {
            const angle = (index / rotatingSkills.length) * 2 * Math.PI;
            const radius = isMobile
  ? (window.innerWidth < 400 ? 115 : 135) // increased radius for more spacing
  : 180;
            const iconSize = isMobile ? 28 : 40;
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const Icon = skill.icon;
            const counterRotate = useTransform(rotation, (value) => -value);

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  x: x - iconSize / 2,
                  y: y - iconSize / 2,
                  rotate: counterRotate,
                  zIndex: 1,
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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

        {/* Center Circle - Smoother hover without blinking */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center relative overflow-hidden group"
          initial={{
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)",
          }}
          whileHover={{
            background:
              "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(124, 58, 237, 0.25) 100%)",
            boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)",
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-white text-lg sm:text-2xl font-semibold text-center px-4 relative z-10">
            <motion.span
              className="block"
              whileHover={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tech Stack
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default RotatingTechStack;
