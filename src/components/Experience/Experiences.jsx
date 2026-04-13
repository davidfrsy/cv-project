import { useState } from "react";
import "./Experiences.css";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      company: "PT Hwa Seung Indonesia 2",
      period: "November 2025  - Present",
      tasks: [
        "Developed and maintained internal web applications for laboratory and operational workflows.",
        "Built CRUD modules, DataTables integration, and reporting features using Laravel.",
        "Improved user experience by refining interface flow, filtering, and dashboard components.",
      ],
    },
    {
    company: "Final Project Research at Dian Nuswantoro University",
    period: "October 2024 - February 2025",
    tasks: [
        "Conducted research on cybersecurity challenges in the Internet of Vehicles (IoV), focusing on intrusion detection and data imbalance issues.",
        "Applied Random Under-Sampling (RUS) on the CICIoV2024 dataset to improve class balance and enhance model performance.",
        "Evaluated multiple machine learning models (Random Forest, AdaBoost, Gradient Boosting, XGBoost), achieving significant improvements in accuracy, precision, recall, F1-score, and computational efficiency.",
    ],
    },
    {
      company: "Web Developer Intern at Indofood",
      period: "July 2024 - September 2024",
      tasks: [
        "Developed a monthly reporting system to track consumable stock and transformed the data into a trend-based dashboard.",
        "Translated design concepts into functional and responsive frontend dashboards.",
        "Optimized page structure and styling to improve UI clarity and overall usability.",
      ],
    },
    {
      company: "Independent Study Program at Infinite Learning Batam",
      period: "February 2024 - June 2024",
      tasks: [
        "Implemented React and Node.js to develop a full-stack web application.",
        'Built "AquaCare", a web system to record and manage costs for catfish cultivation.',
        "Transformed raw data into meaningful and user-friendly dashboards.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container experience-container">
        <div className="experience-header">
          <h3 className="text-primary fw-bold">EXPERIENCE</h3>
          <h2 className="fw-bold">Where I’ve worked and what I’ve done</h2>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.company}
                className={`experience-card ${isOpen ? "active" : ""}`}
              >
                <button
                  className="experience-top"
                  onClick={() => toggleAccordion(index)}
                  type="button"
                >
                  <div className="experience-info">
                    <h3>{item.company}</h3>
                    <small>{item.period}</small>
                  </div>
                  <span className={`experience-icon ${isOpen ? "open" : ""}`}>
                    +
                  </span>
                </button>

                <div className={`experience-content ${isOpen ? "open" : ""}`}>
                  <ul>
                    {item.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
