"use client";

import { useEffect, useRef, useState } from "react";


const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bgColor, setBgColor] = useState("#0F172A"); // Default to dark theme

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: any[] = [];
    const density = 120;

    const colorsDark = [
      "#ffffff",    
      "#c7d2fe",    
      "#a5b4fc",    
      "#93c5fd",    
      "#99f6e4",    
      "#fecaca",    
    ];

    const colorsLight = [
      "#e2e8f0",              
      "#c7d2fe",    
      "#bfdbfe",    
      "#d1fae5",    
      "#fde68a",    
    ];
    

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const starColors = isDark ? colorsDark : colorsLight;
    setBgColor(isDark ? "#0F172A" : "#F8FAFC");

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Create stars
    const createStars = () => {
      if (!canvas) return;
      
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.8 + 0.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          driftX: (Math.random() - 0.5) * 0.05,
          driftY: (Math.random() - 0.5) * 0.05,
        });
      }
    };

    createStars();

    function animate() {
      if (!canvas || !ctx) return;

      // Use the current bgColor from state
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // twinkle
        star.alpha += (Math.random() - 0.5) * star.twinkleSpeed;
        star.alpha = Math.min(Math.max(star.alpha, 0.2), 1);

        // drift
        star.x += star.driftX;
        star.y += star.driftY;

        // wrap around screen edges
        if (star.x < 0) star.x = canvas?.width || 0;
        if (canvas && star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas?.height || 0;
        if (canvas && star.y > canvas.height) star.y = 0;

        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    // Handle system color scheme changes
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      const isNowDark = e.matches;
      setBgColor(isNowDark ? "#0F172A" : "#F8FAFC");
      // Recreate stars with new colors
      createStars();
    };

    colorSchemeQuery.addEventListener('change', handleColorSchemeChange);

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      colorSchemeQuery.removeEventListener('change', handleColorSchemeChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [bgColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default StarBackground;