import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Here is my Portfolio. All Rights Reserved.
        </p>
        <p className="footer-description">
          Connect with me on social media or via email for collaborations, project inquiries, or just to say hi!
        </p>
        <div className="social-links">
          <a href="https://github.com/saurabhdangi03" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/saurabh-dangi-6389471b1" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
