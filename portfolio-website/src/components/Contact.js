import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_dcdmao5', // Replace with your EmailJS service ID
        'template_8hd4joj', // Replace with your EmailJS template ID
        formData,
        'S1e1y1IytUinN-EIh' // Replace with your EmailJS user ID
      )
      .then((response) => {
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        setErrorMessage('Failed to send your message. Please try again later.');
        setSuccessMessage('');
        setIsSubmitting(false);
      });
  };

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
              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
