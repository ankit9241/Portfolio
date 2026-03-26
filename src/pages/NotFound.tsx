"use client";

import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(78,133,191,0.15), transparent 70%), #0a0a0a",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
        }}
      />
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center px-6 mt-[-10vh]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div
            className="text-8xl md:text-9xl font-bold"
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              background: "linear-gradient(90deg, #89AACC, #4E85BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h1
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              color: "#f5f5f5",
            }}
          >
            Page Not Found
          </h1>

          <p
            className="text-sm md:text-base text-[#888888] max-w-md mx-auto"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            The page you're looking for seems to have vanished into the digital
            void.
            <br />
            Let's get you back to solid ground.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
        </motion.div>

        <motion.div
          className="absolute top-32 right-32 w-40 h-40 rounded-full opacity-20 blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05), transparent 60%)",
          }}
        />
      </motion.div>

    </div>
  );
};

export default NotFound;
