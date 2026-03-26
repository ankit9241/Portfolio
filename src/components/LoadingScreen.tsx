"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const words = ["Innovate", "Build", "Deploy"];
  const totalDuration = 2700; // 2.7 seconds

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const startTime = performance.now();
    startTimeRef.current = startTime;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / totalDuration, 1);
      
      setProgress(progressRatio);
      setCounter(Math.floor(progressRatio * 100));

      if (progressRatio < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Call onComplete immediately when progress reaches 100%
        // The exit animation will handle the smooth fade-out
        onCompleteRef.current();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const wordTimings = [0, 900, 1900]; // Exact timings for each word
    
    const timers: NodeJS.Timeout[] = [];
    
    words.forEach((_, index) => {
      if (index > 0) {
        const timer = setTimeout(() => {
          setCurrentWordIndex(index);
        }, wordTimings[index]);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const formatCounter = (num: number): string => {
    return num.toString().padStart(3, '0');
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: `
          radial-gradient(circle at center, rgba(78,133,191,0.15), transparent 70%),
          #0a0a0a
        `,
      }}
    >
      {/* Noise/Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.03) 1px,
              rgba(255,255,255,0.03) 2px
            )
          `,
        }}
      />

      {/* Top-Left Label */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span 
          className="uppercase tracking-[0.3em] text-[#888888] text-xs md:text-sm"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Ankit Kumar
        </span>
      </motion.div>

      {/* Center Words */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWordIndex}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#f5f5f5',
            }}
          >
            {words[currentWordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Counter (Bottom-Right) */}
      <motion.div
        className="absolute bottom-12 right-8 md:bottom-16 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div 
          className="text-2xl md:text-3xl font-mono"
          style={{
            fontFamily: 'SF Mono, Monaco, monospace',
            color: '#f5f5f5',
            textShadow: `0 0 ${progress / 10}px rgba(137,170,204,0.3)`,
          }}
        >
          {formatCounter(counter)}
        </div>
      </motion.div>

      {/* Progress Bar (Bottom Edge) */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #89AACC, #4E85BF)',
            boxShadow: '0 0 8px rgba(137,170,204,0.35)',
          }}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.1, ease: 'linear' }}
        >
          {/* Animated Shine Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>

      {/* Vertical Progress Line (Left Edge) */}
      <div className="absolute top-0 left-0 w-[1px] bg-[#1f1f1f]">
        <motion.div
          className="w-full bg-[#4E85BF]"
          style={{
            height: `${progress * 100}%`,
            boxShadow: '0 0 4px rgba(78,133,191,0.5)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
