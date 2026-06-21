import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import AppWrapper from "./components/AppWrapper";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <AppWrapper>
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen">
          <StarBackground />
          <div className="relative overflow-x-hidden">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AppWrapper>
  );
}

export default App;
