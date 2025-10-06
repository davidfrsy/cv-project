// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect, useRef  } from 'react'; // Impor useState & useEffect
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const togglerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleNavLinkClick = () => {
    if (collapseRef.current.classList.contains('show')) {
      togglerRef.current.click();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container container-narrow">
        <a className="navbar-brand fw-bold" href="#home">David.dev</a>
        <button ref={togglerRef} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={collapseRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleNavLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavLinkClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavLinkClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;