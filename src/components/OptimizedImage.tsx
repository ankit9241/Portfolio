"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  sizes?: string;
  aspectRatio?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  placeholder = "blur",
  sizes = "100vw",
  aspectRatio,
  blurDataURL,
  onLoad,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    ...(aspectRatio && { aspectRatio }),
  };

  const imageStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const placeholderStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: blurDataURL 
      ? `url(${blurDataURL}) center/cover blur(20px)` 
      : placeholder === "blur" 
        ? "linear-gradient(135deg, #1a1a1a, #2a2a2a)" 
        : "transparent",
    filter: blurDataURL ? "blur(20px)" : placeholder === "blur" ? "none" : "none",
    transform: blurDataURL ? "scale(1.1)" : "scale(1)",
    transition: "opacity 0.3s ease-in-out",
    opacity: isLoaded ? 0 : 1,
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Placeholder */}
      <div style={placeholderStyle} />
      
      {/* Actual Image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          onLoad={handleImageLoad}
          style={imageStyle}
          className="w-full h-full object-cover"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
