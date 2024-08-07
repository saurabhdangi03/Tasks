import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Assuming styles are in App.css

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(null);
  const [allUserData, setAllUserData] = useState([]);
  const [statusCode, setStatusCode] = useState(null); // To store the status code

  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Name validation
    if (name.length < 3) {
      validationErrors.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      validationErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      validationErrors.password = 
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatusCode(400); // Bad Request for validation errors
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        email,
        password
      });
      
      if (response.status === 201) {
        let existingData = JSON.parse(localStorage.getItem('allUserData')) || [];
        existingData.push(response.data);
        localStorage.setItem('allUserData', JSON.stringify(existingData));

        setUserData(response.data);
        setAllUserData(existingData);

        setName('');
        setEmail('');
        setPassword('');
        setStatusCode(201); // Created
      } else {
        setStatusCode(response.status);
      }

    } catch (error) {
      console.error("Error during form submission:", error);
      if (error.response) {
        setStatusCode(error.response.status); // Set status code based on error
      } else {
        setStatusCode(500); // Internal Server Error
      }
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('allUserData');
    if (storedData) {
      setAllUserData(JSON.parse(storedData));
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length >= 3) {
      setErrors(prevErrors => ({ ...prevErrors, name: null }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(e.target.value)) {
      setErrors(prevErrors => ({ ...prevErrors, email: null }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (passwordPattern.test(e.target.value)) {
      setErrors(prevErrors => ({ ...prevErrors, password: null }));
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="error email-error">{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display status code */}
      {statusCode && (
        <div style={{ marginTop: '20px', color: statusCode === 201 ? 'green' : 'red' }}>
          <h3>Status Code: {statusCode}</h3>
          {statusCode === 201 && <p>Form submitted successfully!</p>}
          {statusCode === 400 && <p>Bad Request: Please correct the errors in the form.</p>}
          {statusCode === 500 && <p>Internal Server Error: Please try again later.</p>}
        </div>
      )}

      {/* Display stored data */}
      {userData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Stored User Data:</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
        </div>
      )}

      {/* Display all stored data */}
      {allUserData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>All Stored User Data:</h3>
          <ul>
            {allUserData.map((user, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
