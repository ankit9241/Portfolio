import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Experiences from "../components/Experiences";
import GithubStats from "../components/GithubStats";
// import Blog from '../components/Blog'
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <GithubStats />
      <Certificates />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default Home;