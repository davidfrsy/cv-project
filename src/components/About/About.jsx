import React from "react";
import "./About.css";
import WorkspaceImage from "../../assets/workspace.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div data-aos="fade-up" className="container container-narrow">
        <div className="row align-items-center">
          {/* Kolom Kiri: Gambar & Teks Berputar (akan kita isi nanti) */}
          <div className="col-lg-6 col-md-12">
            {/* Konten gambar akan ada di sini */}
            <div className="about-image-container">
              <img
                src={WorkspaceImage}
                alt="Workspace"
                className="workspace-image"
              />
              <div className="rotating-text-container">
                <span className="center-emoji">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Teks Deskripsi */}
          <div className="col-lg-6 col-md-12">
            <div className="about-text">
              <p className="text-primary fw-bold">ABOUT ME</p>
              <h2 className="fw-bold">
                A dedicated Front-end Developer based in Semarang, Indonesia 📍
              </h2>
              <p className="text-secondary mt-3">
                As a Front-End Developer, I bring ideas to life with a strong command of HTML, CSS, JavaScript, React, and Bootstrap. My focus is on creating responsive, user-friendly websites that are both functional and engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
