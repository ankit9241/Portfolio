import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
// import Resume from './components/Resume'
// import Blog from './components/Blog'
import Contact from './components/Contact';

const StarBackground = lazy(() => import('./components/StarBackground'));
;

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
            <Projects />
            <Certificates />
            {/* <Resume /> */}
            {/* <Blog /> */}
            <Contact />
          </main>
        </div>
      </div>
  )
}

export default App;