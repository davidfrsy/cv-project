import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container container-narrow">
        <div className="footer-content">
          <p className="copyright-text">
            Copyright © 2025. All rights are reserved
          </p>
          <div className="footer-social-icons">
            <a href="https://linkedin.com/in/davidfrsy" 
              target="_blank" 
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/davidfrsy" 
              target="_blank" 
              rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="/cv_muhammad_david_firmansyah.pdf" 
              download="cv_muhammad_david_firmansyah.pdf">
              <FaFilePdf />
            </a>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;