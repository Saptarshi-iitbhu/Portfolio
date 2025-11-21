import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

import AllProjects from './components/AllProjects';

const Portfolio = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="bg-gray-900 min-h-screen text-gray-100 font-sans selection:bg-slate-500 selection:text-white">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;
