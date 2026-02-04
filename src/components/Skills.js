import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: [
        "Distributed multi-GPU training",
        "Deep learning architectures (CNNs, encoder-decoder models, transformers)",
        "Loss optimization",
        "Multimodal data fusion",
        "Scalable experimentation and reproducibility"
      ]
    },
    {
      title: "Software",
      icon: "💻",
      skills: [
        "End-to-end systems and application development",
        "Containerized HPC and cloud workflows",
        "Version control (Git)",
        "Python and shell scripting for automation",
        "Cross-platform application development",
        "Sound software design principles"
      ]
    },
    {
      title: "Data",
      icon: "📊",
      skills: [
        "Large-scale data processing and distributed ETL (Pandas, PySpark)",
        "Efficient feature engineering at scale",
        "Data visualization for exploratory analysis (D3.js, matplotlib)"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">⚡</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
