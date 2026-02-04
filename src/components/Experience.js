import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Machine Learning Research Engineer | DOE MSIPP Fellow",
      company: "Los Alamos National Laboratory",
      location: "Los Alamos, NM",
      period: "Sep 2024 - Current",
      achievements: [
        "Conducted large-scale benchmarking of state-of-the-art computer vision models, evaluating 40+ hyperparameter configurations per model and executing 750+ GPU-hours on multi-node, multi-GPU HPC systems (Slurm, Apptainer, Docker, PyTorch DDP)",
        "Identified dominant drivers of subsurface leakage risk using SHapley Additive exPlanations (SHAP) analysis across diverse model families (stacked ensembles, deep neural networks, XGBoost, random forests), improving interpretability and decision reliability (PyTorch, scikit-learn, and H2O)",
        "Developed a robust, generalizable data-fusion strategy for hyperspectral remote sensing applications",
        "Executed end-to-end research—spanning data engineering, model training, quantitative analysis, and scientific visualization—resulting in one first-author and two co-authored peer-reviewed manuscripts submitted to high-impact scientific journals"
      ]
    },
    {
      title: "Business Development Associate",
      company: "AIMMO",
      location: "Santa Clarita, CA",
      period: "Oct 2023 - May 2024",
      achievements: [
        "Increased lead generation throughput by 2-3 orders of magnitude using automated data collection and analysis pipelines (Selenium, Pandas, OpenAI API)",
        "Advised automotive, defense, and manufacturing clients on AI data pipeline optimization and applied computer vision workflows"
      ]
    },
    {
      title: "Computational Science Research Intern",
      company: "Oak Ridge National Laboratory",
      location: "Oak Ridge, TN",
      period: "May 2023 - Aug 2023",
      achievements: [
        "Identified key user-experience pain points and cataloged features and metadata for 20 neutron-detecting instruments",
        "Authored a concise 'getting started' data reduction guide used by thousands of researchers conducting neutron scattering experiments at a $2B national facility"
      ]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Beck's Hybrids",
      location: "Atlanta, IN",
      period: "Jan 2023 - May 2023",
      achievements: [
        "Produced an object detection workflow using CNNs in ArcGIS for counting plants from drone images",
        "Boosted object detection performance through data and model optimization"
      ]
    },
    {
      title: "Mathematics Summer Research Assistant",
      company: "Arizona State University",
      location: "Tempe, AZ",
      period: "May 2022 - Aug 2022",
      achievements: [
        "Developed and evaluated numerical methods for inverse problems via MATLAB-based modeling, simulation, and analysis",
        "Applied novel reconstruction methods to improve images degraded by motion, low resolution, and noise"
      ]
    },
    {
      title: "Software Development Intern",
      company: "City of Aurora",
      location: "Aurora, CO",
      period: "Sep 2020 - Mar 2021",
      achievements: [
        "Digitized and standardized court operations and workflows using JavaScript, MySQL, and PHP",
        "Contributed to an integrated system combining PDFs, web forms, and relational databases"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💼</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <div className="job-meta">
                  <span className="company">{exp.company}</span>
                  <span className="location">{exp.location}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
