import React, { useState, useEffect } from 'react'; 
import './Projects.css';

import { FaGithub, FaReact, FaSass, FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiCodeigniter, SiMysql, SiLaravel, SiTailwindcss } from "react-icons/si";

import { supabase } from '../../supabaseClient';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*'); 

      if (error) {
        throw error;
      }
      
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error.message);
    }
  }

  const getTechIcon = (techName) => {
    switch (techName.toLowerCase()) {
      case 'react':
        return <FaReact />;
      case 'scss':
        return <FaSass />;
      case 'bootstrap':
        return <FaBootstrap />;
      case 'codeigniter':
        return <SiCodeigniter />;
      case 'css':
        return <FaCss3Alt />;
      case 'mysql':
        return <SiMysql />;
      case 'laravel':
        return <SiLaravel />;
      case 'tailwind':
        return <SiTailwindcss />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container container-narrow">
        <div className="projects-header" data-aos="fade-up">
          <p className="text-primary fw-bold">PORTFOLIO</p>
          <h2 className="fw-bold">Each project is a unique piece of development ✨</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={project.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="row">
                <div className={`col-lg-6 col-md-12 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                  <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image_url} alt={project.title} className="project-image" />
                  </a>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="project-description text-center text-lg-start">
                    <h4 className="fw-bold">{project.title}</h4>
                    <p className="text-secondary my-3">{project.description}</p>
                    <div className="tech-stack my-3">
                      {project.tech_stack && project.tech_stack.map((tech, i) => (
                        <span 
                          className="tech-badge" 
                          key={i} 
                        >
                          {getTechIcon(tech)} {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.code_link} target="_blank" rel="noopener noreferrer">
                        Code <FaGithub />
                      </a>
                      <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                        Live Demo <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;