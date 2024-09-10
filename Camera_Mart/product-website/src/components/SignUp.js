import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        username,
        password,
      });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error during signup');
    }
  };

  const navigateToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="message">{message}</p>
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={navigateToLogin}>
            Log In Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
