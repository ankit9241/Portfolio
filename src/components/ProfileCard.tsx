import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  status: string;
  contactText: string;
  onContactClick?: () => void;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  status,
  contactText,
  onContactClick,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setIsVisible(true), []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) return onContactClick();

    const subject = 'Contact from Portfolio';
    const body = `Hello Ankit,\n\nI saw your portfolio and would like to connect.\n\nRegards,\n[Your Name]`;
    window.location.href = `mailto:ankitkumar.iitp09@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let raf = 0;
    let last = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      last.x = e.clientX;
      last.y = e.clientY;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = last.x - rect.left;
        const y = last.y - rect.top;
        const rotateX = (y - rect.height / 2) / 30;
        const rotateY = (rect.width / 2 - x) / 30;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const gradient = 'linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)';

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={cardRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative rounded-2xl p-10"
            style={{
              minHeight: 380,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 10px 45px rgba(7,10,30,0.6)',
              transition: 'transform 200ms ease',
            }}
          >
            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <div
                className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-white">{name}</h2>

                <p className="text-[#BBD7FF] mt-1 text-base">{title}</p>

                <div className="flex items-center gap-2 mt-3 text-sm text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {status}
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <span
                    className="px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: 'rgba(79,141,255,0.1)',
                      border: '1px solid rgba(95,141,255,0.12)',
                      color: '#DAE8FF',
                    }}
                  >
                    1+ years experience
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-gray-200 text-base leading-relaxed"
            >
              I design functional, clean interfaces and build scalable products.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
              <button
                onClick={handleContactClick}
                style={{ background: gradient, color: '#021021' }}
                className="flex-1 py-3 rounded-lg font-semibold shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <FiDownload />
                {contactText}
              </button>

              <div className="flex items-center gap-3">
                <a href="https://github.com/ankit9241" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
                  <FaGithub className="text-white" size={22} />
                </a>
                <a href="https://linkedin.com/in/ankit-kumar-0435b8257" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
                  <FaLinkedin className="text-[#9AB9FF]" size={22} />
                </a>
                <a href="mailto:ankitkumar.iitp09@gmail.com" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
                  <FaEnvelope className="text-[#FFCACA]" size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
