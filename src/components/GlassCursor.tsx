import React, { useState, useEffect } from "react";
import GlassSurface from "./GlassSurface";

const GlassCursor: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const wrapperStyle: React.CSSProperties = {
    left: `${mouseX}px`,
    top: `${mouseY}px`,
  };

  return (
    <div className="glass-cursor-wrapper" style={wrapperStyle}>
      <GlassSurface
        width={70}
        height={70}
        borderRadius={100}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="difference"
      />
    </div>
  );
};

export default GlassCursor;
