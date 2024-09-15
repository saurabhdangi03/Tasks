import React from 'react';
import './styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skills-card">
          <div className="skills-card-front">
            <h3>Frontend Skills</h3>
          </div>
          <div className="skills-card-back">
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
              <li>Axios</li>
              <li>React Router</li>
            </ul>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-card">
          <div className="skills-card-front">
            <h3>Backend Skills</h3>
          </div>
          <div className="skills-card-back">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>RESTful API</li>
              <li>JSON</li>
            </ul>
          </div>
        </div>

        {/* Other Skills */}
        <div className="skills-card">
          <div className="skills-card-front">
            <h3>Other Skills</h3>
          </div>
          <div className="skills-card-back">
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>Postman</li>
              {/* <li>JavaScript Promises and Async/Await</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
