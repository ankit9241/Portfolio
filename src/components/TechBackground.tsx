"use client";

import { useEffect, useRef } from "react";

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRID_SPACING = 24;
    const DOT_RADIUS = 1.25;
    const BASE_OPACITY = 0.22;
    const GLOW_RADIUS = 140;
    const MAX_GLOW_OPACITY = 0.45;
    const DOT_COLOR_RGB = "255, 255, 255";

    const resize = () => {
      if (!canvas || !ctx) return;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // High-DPI (Retina) backing store scaling
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!canvas || !ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const cols = Math.ceil(width / GRID_SPACING);
      const rows = Math.ceil(height / GRID_SPACING);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * GRID_SPACING;
          const y = r * GRID_SPACING;

          let opacity = BASE_OPACITY;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < GLOW_RADIUS) {
              const factor = 1 - dist / GLOW_RADIUS;
              opacity = BASE_OPACITY + (MAX_GLOW_OPACITY - BASE_OPACITY) * (factor * factor);
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${DOT_COLOR_RGB}, ${opacity})`;
          ctx.fill();
        }
      }


    };

    let animationId: number;
    const renderLoop = () => {
      draw();
      animationId = requestAnimationFrame(renderLoop);
    };

    resize();
    renderLoop();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onResize = () => {
      resize();
      draw();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none select-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default TechBackground;
