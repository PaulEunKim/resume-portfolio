import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "SLAM Drone",
      description: "Created a drone controller capable of simultaneous localization and mapping in a simulated environment",
      technologies: ["Python", "SLAM"]
    },
    {
      title: "Augmented Reality Image Warp",
      description: "Using epipolar geometry, take a regular image and warp it to fit environment",
      technologies: ["Computer Vision", "OpenCV", "Epipolar Geometry"]
    },
    {
      title: "Interactive Health and Pollutant Visualizer",
      description: "Using D3.js, explore a geospatial web-based map based on pollutant levels by health, and pollutant category",
      technologies: ["D3.js", "JavaScript", "Data Visualization", "Geospatial Analysis"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🚀</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
