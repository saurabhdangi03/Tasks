import React from 'react';
import './styles/Strengths.css';

const Strengths = () => {
  return (
    <section id="strengths" className="strengths container">
      <h2>Strengths</h2>
      <div className="strengths-list">
        <div className="strength-item">
          <h3>Problem-Solving Skills</h3>
          <p>Ability to tackle complex issues with logical and creative solutions.</p>
        </div>
        <div className="strength-item">
          <h3>Attention to Detail</h3>
          <p>Meticulous in ensuring accuracy and quality in all tasks.</p>
        </div>
        <div className="strength-item">
          <h3>Strong Communication</h3>
          <p>Effective in both written and verbal communication, facilitating clear and concise interactions.</p>
        </div>
        <div className="strength-item">
          <h3>Adaptability</h3>
          <p>Quick to adjust to new situations and challenges, maintaining productivity and effectiveness.</p>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
