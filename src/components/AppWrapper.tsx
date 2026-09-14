"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div 
        className={`w-full transition-opacity duration-700 ease-out ${
          isLoading ? "pointer-events-none select-none" : "opacity-100"
        }`}
        aria-busy={isLoading}
      >
        {children}
      </div>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading-screen" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AppWrapper;

