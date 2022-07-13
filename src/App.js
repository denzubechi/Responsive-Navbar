import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './Navbar/Navbar';
import Testimonials from './pages/Testimonials';
import './App.css'

function App() {
 
  return (
    <div className='containner'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
