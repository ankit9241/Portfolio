'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProfileCard from './ProfileCard';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ProfileCard
            name="Ankit Kumar"
            title="Web Developer"
            status="Open to new opportunities"
            contactText="Contact Me"
            avatarUrl="/assets/profile.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              // Open Gmail with pre-filled email
              const recipient = 'ankitkumar.iitp09@gmail.com';
              const subject = 'Contact from Portfolio';
              const body = 'Hello Ankit,%0D%0A%0D%0AI came across your portfolio and would like to get in touch.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]';
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${body}`, '_blank');
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4"
              >
                I'm Ankit Kumar, a 2nd year BS(CSDA) student at IIT Patna with a passion for full-stack web development. I specialize in creating responsive, sleek, and functional websites using modern technologies like React, Tailwind CSS, JavaScript, and Node.js. My approach combines academic knowledge with practical skills to build projects that are not only visually appealing but also optimized for performance. I believe in writing clean code, maintaining premium design standards, and delivering smooth user experiences.
              </motion.p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4"
              >I enjoy taking ideas from concept to launch, whether it’s developing a product from scratch or improving existing systems for better usability. My recent work includes platforms for e-commerce, mentorship programs, and AI-based online examinations-each project built to meet real-world needs.
              </motion.p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
              >
                Beyond coding, I'm always exploring new tools, trends, and technologies to stay ahead in the fast-moving tech space. I believe in continuous learning, problem-solving, and building solutions that actually make a difference.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;