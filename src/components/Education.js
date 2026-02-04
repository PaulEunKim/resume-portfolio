import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: "MS, Computer Science, Machine Learning",
      institution: "Georgia Institute of Technology",
      period: "Expected Aug 2026",
      coursework: "Machine Learning, Reinforcement Learning, Computer Vision, Robotics: AI Techniques, Data and Visual Analytics, Simulation and Modeling, Exascale ML-based Computational Fluid Dynamics"
    },
    {
      degree: "BS, Data Science",
      institution: "Arizona State University",
      period: "May 2023",
      honors: "Summa Cum Laude"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎓</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
              <div className="period">{edu.period}</div>
              {edu.honors && <div className="honors">🏆 {edu.honors}</div>}
              {edu.coursework && (
                <div className="coursework">
                  <strong>Relevant Coursework:</strong> {edu.coursework}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
