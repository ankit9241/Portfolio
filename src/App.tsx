import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Sidebar } from "./components/Sidebar";
import { CommandPalette, useCommandPalette } from "./components/CommandPalette";
import TechBackground from "./components/TechBackground";
import ShaderBackground from "./components/ShaderBackground";
import AppWrapper from "./components/AppWrapper";

const DynamicBackground = () => {
  const location = useLocation();
  const isProjectsRoute = location.pathname.startsWith("/projects");

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-[-1]">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          isProjectsRoute ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ShaderBackground />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          !isProjectsRoute ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <TechBackground />
      </div>
    </div>
  );
};

function App() {
  const { isOpen: isSearchOpen, open: openSearch, close: closeSearch } = useCommandPalette();

  return (
    <AppWrapper>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen">
          <DynamicBackground />
          <div className="relative overflow-x-hidden">
            <Sidebar onOpenSearch={openSearch} />
            <CommandPalette isOpen={isSearchOpen} onClose={closeSearch} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppWrapper>
  );
}

export default App;
