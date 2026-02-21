import React from "react";
import "./About.css";
import WorkspaceImage from "../../assets/workspace.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div data-aos="fade-up" className="container container-narrow">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image-container">
              <img
                src={WorkspaceImage}
                alt="Workspace"
                className="workspace-image"
              />
              <div className="center-emoji-container">
                <span className="center-emoji">👨‍💻</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-text">
              <h3 className="text-primary fw-bold">ABOUT ME</h3>
              <p className="text-secondary mt-3">
                I am a fresh graduate from Dian Nuswantoro University with a strong interest in building web-based systems. I am currently working at PT Hwa Seung Indonesia 2 as an IT System, where I focus on developing and supporting internal systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
