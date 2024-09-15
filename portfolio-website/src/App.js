import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './components/styles/Global.css';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Strengths from './components/Strengths';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Strengths/>
      <Skills/>
      <Education/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
