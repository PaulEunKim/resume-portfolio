import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Paul Kim. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="mailto:paul.eun.kim@gmail.com" className="footer-link">Email</a>
            <a href="https://linkedin.com/in/pkim-dev" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://github.com/pauleunkim" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
