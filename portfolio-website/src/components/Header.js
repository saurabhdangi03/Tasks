import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#strengths">Strengths</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </header>
  );
};

export default Header;
