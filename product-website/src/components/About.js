import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About CameraMart</h1>
        <p>
          Welcome to CameraMart, your number one source for all things camera accessories. We're dedicated to giving you the very best of camera accessories, with a focus on quality, customer service, and uniqueness.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/products/product1.jpg" alt="About CameraMart" />
      </div>
    </div>
  );
}

export default About;
