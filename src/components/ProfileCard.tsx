import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  status: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  status,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setIsVisible(true), []);


  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let raf = 0;
    let last = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      // Only apply tilt effect to card container, not image
      if (e.target !== el) return;

      cancelAnimationFrame(raf);
      last.x = e.clientX;
      last.y = e.clientY;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = last.x - rect.left;
        const y = last.y - rect.top;
        const rotateX = (y - rect.height / 2) / 30;
        const rotateY = (rect.width / 2 - x) / 30;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={cardRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative rounded-2xl p-6 md:p-10 min-h-[320px] md:min-h-[380px]"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)",
              transition: "transform 200ms ease",
            }}
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
            >
              <div
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0"
                style={{ border: "1px solid #2A2A2A" }}
              >
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-text-primary">
                  <span 
                    className="inline-block"
                    style={{
                      background: "linear-gradient(135deg, #E5E5E5 0%, #9D9D9D 50%, #E5E5E5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    Ankit Kumar
                  </span>
                </h2>

                <p
                  className="mt-1 text-base"
                  style={{ color: "#E5E5E5" }}
                >
                  {title}
                </p>

                <div
                  className="flex items-center gap-2 mt-3 text-sm text-text-secondary justify-center sm:justify-start"
                  style={{ color: "#D5D5D5" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {status}
                </div>

                <div className="mt-3 flex items-center gap-3 justify-center sm:justify-start">
                  <span
                    className="px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#BDBDBD",
                    }}
                  >
                    1+ years experience
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-text-secondary text-base leading-relaxed text-center sm:text-left"
              style={{ color: "#D5D5D5" }}
            >
              I design functional, clean interfaces and build scalable products.
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 sm:gap-3 mt-4 flex-wrap justify-center">
                <a
                  href="https://github.com/ankit9241"
                  target="_blank"
                  className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-text-secondary hover:text-text-primary"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankitkumar1109/"
                  target="_blank"
                  className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-text-secondary hover:text-text-primary"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="mailto:ankitkumar.iitp09@gmail.com"
                  target="_blank"
                  className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-card-bg border border-accent hover:border-accent transition text-text-secondary hover:text-text-primary"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-3xl sm:rounded-3xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#FFFFFF",
                  }}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
