import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaFilePdf,
} from "react-icons/fa";
import { SiCodeigniter, SiMysql, SiLaravel, SiTailwindcss } from "react-icons/si";
import ProfileImage from "../../assets/profile-pict.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container container-narrow">
        <div className="row align-items-center" style={{ minHeight: "80vh" }}>
          <div data-aos="fade-left" className="col-lg-6 col-md-12 order-lg-2 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
            <div className="profile-image-container">
              <img
                src={ProfileImage}
                alt="Foto Profil"
                className="profile-image"
              />
            </div>
          </div>

          {/* Kolom Kiri: Teks */}
          <div data-aos="fade-right" className="col-lg-6 col-md-12 border-lg-1 text-center text-lg-start">
            <h1 className="display-5 fw-bold">Front-End Developer 👋</h1>
            <p className="my-4">
              Hi, I'm Muhammad David Firmansyah, a passionate Front-end Developer based in Semarang. 📍
            </p>
            <div className="social-icons mb-4">
              <a
                href="https://linkedin.com/in/davidfrsy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/davidfrsy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a 
                href="/cv_muhammad_david_firmansyah.pdf" 
                download="cv_muhammad_david_firmansyah.pdf" 
                className="social-icon">
                <FaFilePdf />
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Tech Stack */}
        <div data-aos="fade-up" className="row tech-stack-row">
          <div className="col-lg-2 col-md-12 border-md-end d-flex align-items-center justify-content-center justify-content-md-start">
            <h4 className="fw-bold text-center text-sm-start ">Tech Stack</h4>
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="tech-icons d-flex justify-content-center justify-content-lg-start flex-wrap">
              <FaHtml5 className="tech-icon html-icon" />
              <FaCss3Alt className="tech-icon css-icon" />
              <FaJsSquare className="tech-icon js-icon" />
              <FaReact className="tech-icon react-icon" />
              <SiLaravel className="tech-icon laravel-icon" />
              <FaBootstrap className="tech-icon bootstrap-icon" />
              <SiMysql className="tech-icon mysql-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
