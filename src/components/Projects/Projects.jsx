import { useEffect, useRef } from "react";
import "./Projects.css";
import movieImg from "../../assets/img-movie.jpg";
import cllinicImg from "../../assets/img-clinic.jpg";
import notesImg from "../../assets/img-notes.jpg";

const Projects = () => {
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Movienion",
      desc: "Movie app with modern UI, auth/data powered by Supabase, deployed on Vercel.",
      image: movieImg,
      stack: [
        { label: "React", cls: "bg-primary" },
        { label: "Supabase", cls: "bg-success" },
        { label: "Tailwind", cls: "bg-info" },
      ],
      links: [
        { label: "Live Demo", href: "https://movienion.vercel.app/" },
        { label: "Source Code", href: "https://github.com/davidfrsy/movienion-vercel" },
      ],
    },
    {
      title: "Sistem Poliklinik Sederhana",
      desc: "Simple clinic management system built with CodeIgniter, MySQL, and Bootstrap UI.",
      image: cllinicImg,
      stack: [
        { label: "CodeIgniter", cls: "bg-danger" },
        { label: "Bootstrap", cls: "bg-info" },
        { label: "MySQL", cls: "bg-warning" },
      ],
      links: [
        { label: "Source Code", href: "https://github.com/davidfrsy/Sistem-Poliklinik-Sederhana" },
      ],
    },
    {
      title: "Web Notes",
      desc: "Lightweight notes web app built with vanilla JavaScript, HTML, and CSS.",
      image: notesImg,
      stack: [
        { label: "JavaScript", cls: "bg-warning" },
        { label: "HTML", cls: "bg-danger" },
        { label: "CSS", cls: "bg-primary" },
      ],
      links: [
        { label: "Source Code", href: "https://github.com/davidfrsy/Web-Notes" },
      ],
    },
  ];

  useEffect(() => {
    const els = cardsRef.current.filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
          else entry.target.classList.remove("is-visible"); // OUT animation
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container container-narrow">
        {/* header juga bisa animasi kalau mau */}
        <div className="projects-header">
          <p className="text-primary fw-bold">PORTFOLIO</p>
          <h2 className="fw-bold">Each project is a unique piece of development ✨</h2>
        </div>

        <div className="projects-list">
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 1;
            const direction = isEven ? "right" : "left";

            return (
              <div
                key={p.title}
                className="project-card project-animate"
                data-direction={direction}
                ref={(el) => (cardsRef.current[idx] = el)}
                style={{ transitionDelay: `${idx * 90}ms` }} // optional: stagger
              >
                <div className="row align-items-center">
                  <div className={`col-lg-6 ${isEven ? "order-lg-2" : ""}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>

                  <div className={`col-lg-6 project-description ${isEven ? "order-lg-1" : ""}`}>
                    <h3 className="fw-bold mb-3">{p.title}</h3>
                    <p className="mb-3">{p.desc}</p>

                    <div className="tech-stack mt-3">
                      {p.stack.map((s) => (
                        <span key={s.label} className={`tech-badge ${s.cls}`}>
                          {s.label}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
