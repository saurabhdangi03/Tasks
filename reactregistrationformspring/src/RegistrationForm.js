import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import "./App.css";

// import React, { useState } from "react";
import "./FormComponent.css";
// import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const [isLoginSlideUp, setIsLoginSlideUp] = useState(false);
  const [isSignupSlideUp, setIsSignupSlideUp] = useState(true);

  const handleLoginClick = () => {
    setIsSignupSlideUp(true);
  //  setIsLoginSlideUp(false);
  };

  const handleSignupClick = () => {
    setIsSignupSlideUp(false);
   // setIsLoginSlideUp(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/users", formData);
      setMessage("User registered successfully!");
      setErrors({});
      navigate("/login", { state: { message: "Registration successful, please log in." } });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // If user is already registered, show a message and redirect to login page
        setMessage("Email already in use. Please log in.");
        setErrors({});
        navigate("/login", { state: { message: "Email already registered, please log in." } });
      } else if (error.response && error.response.data) {
        setErrors({ general: error.response.data });
      } else {
        setErrors({ general: "An error occurred" });
      }
    }
  };

  return (
    // <div className="container">
    //   <h2>Register</h2>

      <div className="form-structor">
      <div className={`signup ${isSignupSlideUp ? "slide-up" : ""}`}>
        <h2 className="form-title" id="signup" onClick={handleSignupClick}>
          <span>or</span>Register
        </h2>





      <form onSubmit={handleSubmit}>
        {/* Form Fields */}



        <div className="form-holder">
          {/* <label>Name:</label> */}
          <input type="text" name="name" className="input" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        

        <div className="form-holder">
          {/* <label>Email:</label> */}
          <input type="email" name="email" className="input" placeholder="Email"  value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>



        <div className="form-holder">
          {/* <label>Password:</label> */}
          <input type="password" name="password" className="input" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>



        <button className="submit-btn" type="submit">Register</button>
        {errors.general && <p>{errors.general}</p>}
        {message && <p>{message}</p>}


        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>

     

     </div> 
     
     
    </div>
  );
};

export default RegistrationForm;
