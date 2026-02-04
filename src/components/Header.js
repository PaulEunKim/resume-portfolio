import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-left">
            <h1 className="name">Paul Kim</h1>
            <p className="tagline">
              Relentlessly-resourceful, curious tinkerer; intellectually rigorous, tenacious researcher with excellent communication skills
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:paul.eun.kim@gmail.com" className="contact-badge email-badge">
              <span className="badge-icon">✉</span>
              <span className="badge-text">paul.eun.kim@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/pkim-dev" target="_blank" rel="noopener noreferrer" className="contact-badge linkedin-badge">
              <span className="badge-icon">in</span>
              <span className="badge-text">LinkedIn</span>
            </a>
            <a href="https://github.com/pauleunkim" target="_blank" rel="noopener noreferrer" className="contact-badge github-badge">
              <span className="badge-icon">⌘</span>
              <span className="badge-text">GitHub</span>
            </a>
          </div>
        </div>
        <nav className="nav">
          <a href="#about" className="nav-badge">
            <span className="nav-icon">👤</span>
            <span>About</span>
          </a>
          <a href="#skills" className="nav-badge">
            <span className="nav-icon">⚡</span>
            <span>Skills</span>
          </a>
          <a href="#experience" className="nav-badge">
            <span className="nav-icon">💼</span>
            <span>Experience</span>
          </a>
          <a href="#education" className="nav-badge">
            <span className="nav-icon">🎓</span>
            <span>Education</span>
          </a>
          <a href="#projects" className="nav-badge">
            <span className="nav-icon">🚀</span>
            <span>Projects</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
