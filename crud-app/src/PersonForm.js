import React, { useState, useEffect } from 'react';

function PersonForm({ onSubmit, person, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: ''
  });

  useEffect(() => {
    if (person) {
      setFormData(person);
    }
  }, [person]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person) {
      onSubmit(person.id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({
      name: '',
      email: '',
      mobile: '',
      dob: ''
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{person ? "Edit Person" : "Enter Detail Here"}</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Enter mobile</label>
          <input 
            type="tel" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Enter DOB</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PersonForm;
