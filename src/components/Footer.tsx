"use client";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer
      className="bg-[#1a1a1a] text-text-primary py-8"
      style={{
        borderTop: "none",
        backgroundImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 12%, #FFFFFF 50%, rgba(189, 189, 189, 0.45) 88%, rgba(189, 189, 189, 0) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "72% 1px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center md:space-x-3 space-y-1 md:space-y-0 text-sm text-text-secondary"
        >
          <span className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-white" />

            <span>ankitkumar.iitp09@gmail.com</span>
          </span>

          <span className="hidden md:inline-block text-text-secondary">•</span>

          <span className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-white" />

            <span>Jamshedpur, Jharkhand, India</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
