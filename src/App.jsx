import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import projects from './projects.json';

const App = () => {

  const navLinks = [
    { path: '/about',    text: 'about' },
    { path: '/portfolio', text: 'portfolio' },
    { path: '/contact',  text: 'contact' }
  ];

  {/*const projects = [
    { heading: 'Stoff2D', description: 'It is cool', imgPath: './src/assets/stoff2d.png', github: 'https://github.com/Stoff-Studios/Stoff2D'},
    { heading: 'Stoff2D', description: 'It is cool', imgPath: './src/assets/stoff2d.png', github: 'https://github.com/Stoff-Studios/Stoff2D'},
    { heading: 'Stoff2D', description: 'It is cool', imgPath: './src/assets/stoff2d.png', github: 'https://github.com/Stoff-Studios/Stoff2D'}
  ]*/}

  return (
    <Router>
      <Header logoText='JF' navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;