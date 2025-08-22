'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiHoppscotch, SiVite
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      textColor: 'text-orange-600 dark:text-orange-400',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      color: '#1572B6',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      category: 'Frontend'
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
      textColor: 'text-cyan-600 dark:text-cyan-400',
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      bgColor: 'bg-teal-100 dark:bg-teal-900/30',
      textColor: 'text-teal-600 dark:text-teal-400',
      category: 'Frontend'
    },
    {
      name: 'Bootstrap CSS',
      icon: SiBootstrap,
      color: '#7952B3',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-600 dark:text-purple-400',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
      category: 'Backend'
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: '#000000',
      bgColor: 'bg-gray-100 dark:bg-gray-800/30',
      textColor: 'text-gray-700 dark:text-gray-300',
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      category: 'Backend'
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      textColor: 'text-red-600 dark:text-red-400',
      category: 'Tools'
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      color: '#181717',
      bgColor: 'bg-gray-100 dark:bg-gray-800/30',
      textColor: 'text-gray-700 dark:text-gray-300',
      category: 'Tools'
    },
    {
      name: 'Hoppscotch',
      icon: SiHoppscotch,
      color: '#8A4FFF',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-600 dark:text-purple-400',
      category: 'Tools'
    },
    {
      name: 'Vite',
      icon: SiVite,
      color: '#646CFF',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      category: 'Tools'
    }
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              {category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                    animate={isInView ? {
                      opacity: 1,
                      scale: 1,
                      rotateY: 0
                    } : {
                      opacity: 0,
                      scale: 0.5,
                      rotateY: 180
                    }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      boxShadow: `0 20px 40px ${skill.color}20`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer">
                      <div className="flex flex-col items-center space-y-3">
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${skill.bgColor} shadow-lg mb-4`}>
                          <skill.icon className={`w-8 h-8 ${skill.textColor}`} />
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </div>

                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Always learning and exploring new technologies to create better solutions.
            Currently diving deeper into advanced React patterns and cloud technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;