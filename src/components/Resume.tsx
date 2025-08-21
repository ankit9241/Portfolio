'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload, HiEye } from 'react-icons/hi';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Ankit_Kumar_Resume.pdf';
    link.download = 'Ankit_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/resume/Ankit_Kumar_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-white"
                >
                  <HiDownload className="w-12 h-12" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Ankit Kumar - Full Stack Developer
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                Get the complete overview of my professional journey, technical skills,
                project experience, and educational background.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  rotate: [0, 5, -5, 0]
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiDownload className="w-5 h-5" />
                </motion.div>
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleView}
                className="flex items-center space-x-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
              >
                <HiEye className="w-5 h-5" />
                <span>Preview Resume</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 text-sm text-gray-500 dark:text-gray-500"
            >
              <p>Last updated: August 2025 • PDF Format • 1 Page</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have any questions about my background or experience?
            Feel free to reach out through the contact form below!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;