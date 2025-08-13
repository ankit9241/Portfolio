'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certificates = [
    {
      title: "Hack N Tech Hackathon",
      issuer: "IIT Patna",
      date: "May 2025",
      description: "Successfully participated in the Hack N Tech Hackathon organized by IIT Patna, showcasing problem-solving skills and technical abilities in a competitive environment.",
      image: "/assets/Hackathon.png",
      link: "/assets/Hackathon.png"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Continuous learning and skill development through recognized courses and certifications
            from leading educational platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: -15
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotateX: 0
              } : {
                opacity: 0,
                y: 50,
                rotateX: -15
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {cert.date}
                  </span>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2"
                >
                  {cert.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold mb-3"
                >
                  {cert.issuer}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3"
                >
                  {cert.description}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 whitespace-nowrap"
                >
                  <span>View Certificate</span>
                  <HiExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Committed to lifelong learning and staying updated with the latest technologies and industry best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;