import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experiences from "./components/Experiences";
// import Blog from './components/Blog'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const StarBackground = lazy(() => import("./components/StarBackground"));
function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={<div className="w-full h-full bg-gray-900" />}>
          <StarBackground />
        </Suspense>
      </div>

      {/* Content Container with semi-transparent background */}
      <div className="relative overflow-x-hidden ">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <Projects />
          <Certificates />
          {/* <Blog /> */}
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
