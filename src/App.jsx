import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {

  const navLinks = [
    { path: '/about',    text: 'about' },
    { path: '/projects', text: 'projects' },
    { path: '/contact',  text: 'contact' }
  ];

  return (
    <Router>
      <Header logoText='JF' navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;