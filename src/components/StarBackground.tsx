"use client";
import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgColor = "#111111";
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const stars: any[] = [];
    const density = 100;
    const colorsDark = [
      "#ffffff",
      "#f0f0f0",
      "#e0e0e0",
      "#d0d0d0",
      "#c0c0c0",
      "#b0b0b0",
      "#a0a0a0",
      "#909090",
      "#808080",
      "#707070",
      "#606060",
      "#505050",
      "#404040",
      "#303030",
      "#202020",
      "#101010",
      "#000000",
    ];
    const starColors = colorsDark;
    let time = 0;
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    const createStars = () => {
      if (!canvas) return;
      stars.length = 0;
      for (let i = 0; i < density; i++) {
        const size = Math.random() * 2 + 0.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          baseSize: size,
          alpha: Math.random() * 0.7 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          driftX: (Math.random() - 0.5) * 0.5,
          driftY: (Math.random() - 0.5) * 0.5,
          pulseSpeed: Math.random() * 0.01 + 0.005,
          pulseSize: Math.random() * 0.5 + 0.5,
        });
      }
    };
    createStars();
    function animate() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time += 0.01;
      stars.forEach((star) => {
        const pulse =
          Math.sin(time * star.pulseSpeed) * star.pulseSize * 0.5 + 1;
        star.size = star.baseSize * pulse;
        star.alpha += (Math.random() - 0.5) * star.twinkleSpeed;
        star.alpha = Math.min(Math.max(star.alpha, 0.3), 1);
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < -10) star.x = (canvas?.width || 0) + 10;
        if (canvas && star.x > canvas.width + 10) star.x = -10;
        if (star.y < -10) star.y = (canvas?.height || 0) + 10;
        if (canvas && star.y > canvas.height + 10) star.y = -10;
        ctx.globalAlpha = star.alpha * 0.7;
        ctx.fillStyle = star.color;
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 2,
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    const animationId = requestAnimationFrame(animate);
    const handleResize = () => {
      resizeCanvas();
      createStars();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default StarBackground;
