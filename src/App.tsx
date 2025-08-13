import React from 'react'
import { ThemeProvider } from './components/ThemeWrapper'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Resume from './components/Resume'
// import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Resume />
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App