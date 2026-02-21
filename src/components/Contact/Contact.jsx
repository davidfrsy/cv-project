import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const elements = [headerRef.current, ...cardsRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible"); 
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container container-narrow">
        <div className="contact-content text-center">
          {/* HEADER */}
          <div ref={headerRef} className="contact-header animate-fade-up">
            <p className="text-primary fw-bold">CONTACT</p>
            <h2 className="fw-bold">Let's Turn Your Vision into Reality 👁️</h2>
          </div>

          {/* CARDS */}
          <div className="contact-card-container">
            {[
              {
                href: "mailto:mdavidfrsy@gmail.com",
                icon: <FaEnvelope className="contact-icon email-icon" />,
                text: "Email",
              },
              {
                href: "https://linkedin.com/in/davidfrsy",
                icon: <FaLinkedin className="contact-icon linkedin-icon" />,
                text: "LinkedIn",
              },
              {
                href: "/cv_muhammad_david_firmansyah.pdf",
                icon: <FaFilePdf className="contact-icon pdf-icon" />,
                text: "CV",
                download: true,
              },
            ].map((item, i) => (
              <a
                key={item.text}
                href={item.href}
                download={item.download}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card animate-zoom"
                style={{ transitionDelay: `${i * 120}ms` }}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                {item.icon}
                <span className="contact-text">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
