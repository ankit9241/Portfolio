
'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-kumar-0435b8257/",
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      hoverBgColor: 'hover:bg-blue-200 dark:hover:bg-blue-800/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverIconColor: 'group-hover:text-blue-700 dark:group-hover:text-blue-300'
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/ankit9241",
      bgColor: 'bg-gray-100 dark:bg-gray-800/30',
      hoverBgColor: 'hover:bg-gray-200 dark:hover:bg-gray-700/50',
      iconColor: 'text-gray-700 dark:text-gray-300',
      hoverIconColor: 'group-hover:text-gray-800 dark:group-hover:text-gray-200'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-sans text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ankit
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Full-Stack Web Developer passionate about creating amazing digital experiences
              and solving real-world problems through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className={`group w-10 h-10 ${social.bgColor} ${social.hoverBgColor} rounded-lg flex items-center justify-center transition-all duration-300`}
                >
                  <social.icon className={`w-5 h-5 ${social.iconColor} ${social.hoverIconColor} transition-colors duration-200`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Certificates', id: 'certificates' },
                { name: 'Resume', id: 'resume' },
                // { name: 'Blog', id: 'blog' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ x: 5 }}
                  className="block w-full text-left text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <span>ankitkumar.iitp09@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaPhone className="text-green-400 transform -scale-x-100" />
                <span>+91 92412 72626</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-400" />
                <span>Jamshedpur, Jharkhand, India</span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
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
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Ankit Kumar. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#ec4899', '#ef4444']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>by Ankit.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
