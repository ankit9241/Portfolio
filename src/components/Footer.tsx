"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-transparent text-white py-8"
      style={{
        borderTop: "none",
        backgroundImage:
          "linear-gradient(90deg, rgba(73,191,201,0) 0%, rgba(73,191,201,0.45) 12%, #5F8DFF 50%, rgba(154,141,255,0.45) 88%, rgba(154,141,255,0) 100%)",
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
          className="flex flex-col md:flex-row items-center justify-center md:space-x-3 space-y-1 md:space-y-0 text-sm text-gray-300"
        >
          <span className="flex items-center space-x-2">
            <FaEnvelope className="text-[rgba(95,141,255,1)]" />
            <span>ankitkumar.iitp09@gmail.com</span>
          </span>

          <span className="hidden md:inline-block text-gray-500">•</span>

          <span className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[rgba(154,141,255,1)]" />
            <span>Jamshedpur, Jharkhand, India</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
