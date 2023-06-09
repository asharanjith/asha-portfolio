import React, { useRef, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import Navbar from './components/navbarList/Navbar';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import './App.css';

const App = () => {
  const [themeMode, setThemeMode] = useState('dark');

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar
        onHomeClick={scrollToHome}
        onProjectsClick={scrollToProjects}
        onContactClick={scrollToContact}
        onSkillsClick={scrollToSkills}
        toggleThemeMode={toggleThemeMode}
        themeMode={themeMode}
      />

      <div ref={homeRef} id="home">
        <Home
          themeMode={themeMode}
        />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects
          themeMode={themeMode}
        />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills
          themeMode={themeMode}
        />
      </div>
      <div ref={contactRef} id="contact">
        <Contact
          themeMode={themeMode}
        />
      </div>
      <div className="scrollTop">
        <a href="#home" aria-label="scrollToTop"><MdKeyboardDoubleArrowUp className="iconvector" /></a>
      </div>
    </div>
  );
};

export default App;
