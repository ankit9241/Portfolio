import React from "react";
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
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
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
