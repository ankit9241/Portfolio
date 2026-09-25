import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const ShaderGradientElement = ShaderGradient as React.ComponentType<any>;

const ShaderBackground: React.FC = () => {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    // Fade in canvas smoothly once mounted to prevent any harsh popping
    const timer = setTimeout(() => {
      setCanvasReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
      style={{
        zIndex: -1,
        background: `
          radial-gradient(circle at 75% 25%, rgba(154, 123, 86, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 20% 75%, rgba(44, 34, 26, 0.12) 0%, transparent 65%),
          #080706
        `,
      }}
    >
      <div
        className={`w-full h-full transition-opacity duration-1000 ease-out ${
          canvasReady ? "opacity-35" : "opacity-0"
        }`}
      >
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          pixelDensity={1}
          fov={45}
        >
          <ShaderGradientElement
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={0.75}
            cAzimuthAngle={270}
            cDistance={0.5}
            cPolarAngle={180}
            cameraZoom={15.09}
            color1="#0c0a09"
            color2="#2c221a"
            color3="#9a7b56"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="env"
            pixelDensity={1}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.35}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            shader="defaults"
            type="sphere"
            uAmplitude={3.2}
            uDensity={0.8}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={0.3}
            uTime={0}
            wireframe={false}
            zoomOut={false}
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  );
};

export default ShaderBackground;
