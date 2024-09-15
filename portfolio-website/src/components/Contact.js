import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <section id="contact" className="contact container">
      <div className={`contact-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="contact-card-inner">
          {/* Front Side */}
          <div className="contact-card-front" onClick={handleFlip}>
            <h2>Contact Me</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Click to reach out to me!
            </p>
          </div>

          {/* Back Side */}
          <div className="contact-card-back">
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
