import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">👤</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <p>
            I'm a Machine Learning Research Engineer and DOE MSIPP Fellow at Los Alamos National Laboratory, 
            where I conduct cutting-edge research in computer vision, hyperspectral remote sensing, and 
            large-scale distributed machine learning systems.
          </p>
          <p>
            Currently pursuing my MS in Computer Science (Machine Learning) at Georgia Institute of Technology, 
            I bring a unique combination of theoretical knowledge and practical experience in developing 
            scalable ML solutions for real-world problems.
          </p>
          <p>
            My work spans from benchmarking state-of-the-art models on multi-node HPC systems to developing 
            robust data fusion strategies and contributing to peer-reviewed scientific publications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
