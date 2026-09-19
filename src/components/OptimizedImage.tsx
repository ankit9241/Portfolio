"use client";

import React, { useState, useRef, useEffect } from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  placeholder?: "skeleton" | "blur" | "empty";
  sizes?: string;
  aspectRatio?: string;
  blurDataURL?: string;
  skeletonClassName?: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  className = "",
  imageClassName = "",
  priority = false,
  placeholder = "skeleton",
  sizes = "100vw",
  aspectRatio,
  blurDataURL,
  skeletonClassName = "",
  onLoad,
  onError,
  style,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(() => {
    if (priority) return true;
    if (typeof window === "undefined") return true;
    return false;
  });

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if image is already cached/complete in DOM
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "250px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(e);
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    ...(aspectRatio && { aspectRatio }),
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && placeholder !== "empty" && (
        <div
          className={`absolute inset-0 z-0 bg-[#141416] flex items-center justify-center overflow-hidden border border-white/[0.04] ${skeletonClassName}`}
          style={
            blurDataURL
              ? {
                  backgroundImage: `url(${blurDataURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px)",
                }
              : undefined
          }
        >
          {/* Shimmer Wave Effect */}
          <div
            className="absolute inset-0 pointer-events-none animate-image-shimmer"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)",
            }}
          />
        </div>
      )}

      {/* Image Element */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full ${imageClassName} transition-opacity duration-300 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...rest}
        />
      )}
    </div>
  );
};

export const OptimizedImage = Image;
export default Image;

