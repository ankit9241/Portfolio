"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const gradient = "linear-gradient(90deg,#49BFC9 0%,#5F8DFF 50%,#9A8DFF 100%)";

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-kumar-0435b8257/",
      bgClass: "bg-[rgba(73,191,201,0.06)]",
      hoverBgClass: "hover:bg-[rgba(95,141,255,0.08)]",
      iconColor: "text-[rgba(95,141,255,1)]",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/ankit9241",
      bgClass: "bg-[rgba(255,255,255,0.03)]",
      hoverBgClass: "hover:bg-[rgba(255,255,255,0.06)]",
      iconColor: "text-gray-200",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="font-sans text-3xl font-bold mb-4"
              style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Ankit
            </div>

            <p className="text-gray-400 mb-4 max-w-xs">
              Full-Stack Web Developer passionate about creating amazing digital
              experiences and solving real-world problems through technology.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: 0.18,
                      delay: index * 0.06,
                      type: "spring",
                      stiffness: 220,
                    }}
                    viewport={{ once: true }}
                    className={`${social.bgClass} ${social.hoverBgClass} rounded-lg flex items-center justify-center w-10 h-10 transition-transform duration-100`}
                    style={{
                      border: "1px solid rgba(95,141,255,0.06)",
                      boxShadow: "0 6px 18px rgba(9,12,24,0.35)",
                    }}
                  >
                    <Icon className={`w-5 h-5 ${social.iconColor}`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:flex md:flex-col md:items-end"
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: "#E6F3FF" }}>
              Get In Touch
            </h3>

            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-[rgba(95,141,255,1)]" />
                <span>ankitkumar.iitp09@gmail.com</span>
              </p>

              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[rgba(154,141,255,1)]" />
                <span>Jamshedpur, Jharkhand, India</span>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-6 py-2 rounded-lg text-white whitespace-nowrap transition-transform duration-150"
              style={{
                backgroundImage: gradient,
                color: "#021021",
                boxShadow: "0 12px 36px rgba(79,141,255,0.12)",
                border: "1px solid rgba(95,141,255,0.08)",
              }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[rgba(95,141,255,0.04)] flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.16, 1],
                color: ["#ef4444", "#ec4899", "#ef4444"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="w-4 h-4 text-[rgba(239,68,68,1)]" />
            </motion.div>
            <span>by Ankit.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
