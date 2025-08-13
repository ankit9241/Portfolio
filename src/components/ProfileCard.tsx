import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

interface ProfileCardProps {
  avatarUrl?: string;
  name?: string;
  title?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = '/assets/profile.jpg',
  name = 'Ankit Kumar',
  title = 'Full Stack Developer',
  status = 'Available for work',
  contactText = 'Download CV',
  onContactClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      // Default behavior if no handler is provided
      const subject = 'Contact from Portfolio';
      const body = `Hello Ankit,\n\nI came across your portfolio and would like to get in touch.\n\nBest regards,\n[Your Name]`;
      window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
    cardRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--rotate-x', '0deg');
      cardRef.current.style.setProperty('--rotate-y', '0deg');
    }
  };

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={cardRef}
            className="relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-2xl overflow-hidden 
              border border-gray-200/80 dark:border-transparent
              before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-gray-100 before:to-white/50 before:dark:from-transparent before:dark:to-transparent
              before:bg-[length:200%_200%] before:bg-pos-0-0 hover:before:bg-pos-100-100 before:transition-all before:duration-500 before:ease-in-out
              after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-white/50 after:to-transparent after:dark:from-transparent after:pointer-events-none"
            style={{
              transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
              transition: 'transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
            } as React.CSSProperties}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              handleMouseLeave();
              setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute inset-0 opacity-70"
              style={{
                background: 'radial-gradient(farthest-side circle at var(--x, 50%) var(--y, 50%), hsla(266, 100%, 90%, 0.2) 4%, hsla(266, 50%, 80%, 0.15) 10%, hsla(266, 25%, 70%, 0.1) 50%, hsla(266, 0%, 60%, 0) 100%)',
              }}
              animate={{
                '--x': isHovered ? ['50%', '60%', '40%', '50%'] : '50%',
                '--y': isHovered ? ['50%', '60%', '40%', '50%'] : '50%',
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main content */}
            <div className="relative z-10">
              {/* Profile header */}
              <div className="text-center mb-6">
                <motion.div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white dark:border-white/10 overflow-hidden shadow-lg group
                    relative before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/30 before:pointer-events-none"
                  variants={itemVariants}
                >
                  <img 
                    src={avatarUrl} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h2 
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-1" 
                  variants={itemVariants}
                >
                  {name}
                </motion.h2>
                <motion.p 
                  className="text-indigo-600 dark:text-purple-300 text-sm font-medium mb-2 relative inline-block
                    after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-indigo-200 after:dark:bg-purple-700/50 after:rounded-full" 
                  variants={itemVariants}
                >
                  {title}
                </motion.p>
                <motion.div 
                  className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400"
                  variants={itemVariants}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  {status}
                </motion.div>
              </div>

              {/* Contact button */}
              <motion.button
                onClick={handleContactClick}
                className="w-full mt-6 py-3 px-6 rounded-lg relative
                  bg-gradient-to-r from-indigo-600 to-purple-600 
                  text-white font-medium 
                  hover:opacity-90 transition-all duration-300 
                  flex items-center justify-center gap-2 group
                  shadow-md hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-purple-900/30
                  overflow-hidden
                  after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/10 after:to-white/5 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                {contactText}
              </motion.button>

              {/* Social links */}
              <motion.div 
                className="flex justify-center gap-4 mt-8"
                variants={itemVariants}
              >
                <a 
                  href="https://github.com/ankit9241" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/ankitkumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/ankitkumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="mailto:contact@ankitkumar.dev" 
                  className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                >
                  <FaEnvelope size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
