// src/components/Projects/Projects.jsx

import React from "react";
import "./Projects.css";
// Impor Ikon Baru
import { FaGithub, FaReact, FaSass, FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiCodeigniter, SiMysql, SiLaravel, SiTailwindcss, SiReact, SiNodedotjs, SiSupabase } from "react-icons/si";

// Impor gambar proyek Anda
import AppointmentImg from "../../assets/appointment-project.jpg";
import FrozenFoodImg from "../../assets/frozenfood.jpg";
import MoviesImg from "../../assets/movies-project.jpg"; 
import MovienionImg from "../../assets/movienion.jpg"; 

// DATA PROYEK YANG SUDAH DIPERBARUI
const projectsData = [
  {
    title: "Doctor Appointment 🏥",
    description: "Project web system for patient to make appointment with doctor.",
    techStack: [
      { name: "CodeIgniter", icon: <SiCodeigniter />, color: "#EF4223" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "MySql", icon: <SiMysql />, color: "#4479A1" },
    ],
    imageUrl: AppointmentImg,
    liveLink: null, // Menggunakan null atau '#' sama saja
    codeLink: "https://github.com/davidfrsy/Sistem-Poliklinik-Sederhana",
  },
  {
    title: "TOPFOOD",
    description: "A landing page for a frozen food distributor.",
    techStack: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    ],
    imageUrl: FrozenFoodImg,
    liveLink: "https://topfood-surakarta.netlify.app/",
    codeLink: null,
  },
  {
    title: "DUPLIX",
    description: "A page where I learned to fetch from a movies API.",
    techStack: [
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
    imageUrl: MoviesImg,
    liveLink: null,
    codeLink: "https://github.com/davidfrsy/duplix10-app",
  },
  {
    title: "Movienion",
    description: "A blog page where I share my opinions about movies I've watched.",
    techStack: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "NodeJS", icon: <SiNodedotjs />, color: "#3C873A" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" }
    ],
    imageUrl: MovienionImg,
    liveLink: null,
    codeLink: null,
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container container-narrow">
        <div className="projects-header">
          <p className="text-primary fw-bold">PORTFOLIO</p>
          <h2 className="fw-bold">Each project is a unique piece of development ✨</h2>
        </div>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              >
              <div className="row">
                <div className={`col-lg-6 col-md-12 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                  </a>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="project-description text-center text-lg-start">
                    <h4 className="fw-bold">{project.title}</h4>
                    <p className="text-secondary my-3">{project.description}</p>
                    <div className="tech-stack my-3">
                      {project.techStack.map((tech, i) => (
                        <span 
                          className="tech-badge" 
                          key={i}
                          style={{ backgroundColor: tech.color }}
                        >
                          {tech.icon} {tech.name}
                        </span>
                      ))}
                    </div>
                    {/* 👇 LOGIKA KONDISIONAL DITERAPKAN DI SINI 👇 */}
                    <div className="project-links">
                      {project.codeLink && project.codeLink !== '#' && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          Code <FaGithub />
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <FiExternalLink />
                        </a>
                      )}
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