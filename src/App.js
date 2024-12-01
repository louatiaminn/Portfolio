import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/about';
import Skills from './components/skills';
import Project from './components/project';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="bg-softer min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Certifications />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
