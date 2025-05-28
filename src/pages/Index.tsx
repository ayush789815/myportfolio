import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import ThemeProvider from '../components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-colors duration-300">
        <Navbar />
        <Hero />
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="education" className="scroll-mt-20">
          <Education />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Index;
