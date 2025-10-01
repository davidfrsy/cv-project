// src/components/Contact/Contact.jsx

import React from "react";
import { FaEnvelope, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container container-narrow">
        <div className="contact-content text-center">
          <div data-aos="fade-up">
            <p className="text-primary fw-bold">CONTACT</p>
            <h2 className="fw-bold">Let's Turn Your Vision into Reality 👁️</h2>
          </div>

          {/* Ganti info box lama dengan yang baru */}
          <div className="contact-card-container">
            {/* Card untuk Email */}
            <a
              href="mailto:mdavidfrsy@gmail.com"
              className="contact-card"
              data-aos="zoom-in" 
              data-aos-delay="200"
            >
              <FaEnvelope className="contact-icon email-icon" />
              <span className="contact-text">Email</span>
            </a>

            {/* Card untuk LinkedIn */}
            <a
              href="https://linkedin.com/in/davidfrsy"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              data-aos="zoom-in" 
              data-aos-delay="300"
            >
              <FaLinkedin className="contact-icon linkedin-icon" />
              <span className="contact-text">LinkedIn</span>
            </a>

            <a
              href="/cv_muhammad_david_firmansyah.pdf" 
              download="cv_muhammad_david_firmansyah.pdf"
              className="contact-card"
              data-aos="zoom-in" 
              data-aos-delay="400"
            >
              <FaFilePdf className="contact-icon pdf-icon" />
              <span className="contact-text">CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
