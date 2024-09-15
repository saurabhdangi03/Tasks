import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects container">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>BlogMaster</h3>
          <p>Developed a full-stack blog website using React.js for the frontend and Node.js with Express.js for the backend, enabling users to create, read, update, and delete (CRUD) blog posts. Implemented MongoDB as the database for efficient data management. The platform features dynamic routing, a responsive UI with individual CSS for each page, and interactive elements like card-based post displays and hover effects. Deployed the application to ensure accessibility, scalability, and performance.</p>
          <a href="https://blogfrontend-five.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        </div>
        <div className="project-card">
          <h3>E-Commerce Web Application with Authentication and Cart Features</h3>
          <p>Developed a full-stack e-commerce web application using React.js, Node.js, Express, and MongoDB. The application supports user authentication (login/signup), dynamic product listing, a shopping cart feature, and wishlist functionality. Integrated with MongoDB to store user details and product information, ensuring secure data handling and validation. Implemented a responsive and interactive user interface for seamless shopping experiences. Products can only be added to the cart after successful login. Built contact form functionality to capture user inquiries and save data in the database.</p>
          <a href="https://camerafrontend.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        </div>
        {/* <div className="project-card">
          <h3>Project 3</h3>
          <p>Project description goes here...</p>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;



