import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about-content">
        <div className="image-container">
          <img src="f.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="text-content">
          <h1 className="name">
            Hello, I'm <span className="highlighted-text">Saurabh</span> <span className="normal-text">Dangi</span>
          </h1>
          <h2 className="position">FullStack Developer</h2>
          <p className="description animated-hover-text">
            I'm a passionate FullStack developer with a focus on front-end technologies. 
            I love creating modern, responsive, and user-friendly websites and applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
