import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import WelcomePage from "./WelcomePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};


export default App;



// import React, { useState } from "react";
// import "./FormComponent.css";

// export default function FormComponent() {
//   const [isLoginSlideUp, setIsLoginSlideUp] = useState(false);
//   const [isSignupSlideUp, setIsSignupSlideUp] = useState(true);

//   const handleLoginClick = () => {
//     setIsSignupSlideUp(true);
//     setIsLoginSlideUp(false);
//   };

//   const handleSignupClick = () => {
//     setIsSignupSlideUp(false);
//     setIsLoginSlideUp(true);
//   };

//   return (
//     <div className="form-structor">
//       <div className={`signup ${isSignupSlideUp ? "slide-up" : ""}`}>
//         <h2 className="form-title" id="signup" onClick={handleSignupClick}>
//           <span>or</span>Sign up
//         </h2>
//         <div className="form-holder">
//           <input type="text" className="input" placeholder="Name" />
//           <input type="email" className="input" placeholder="Email" />
//           <input type="password" className="input" placeholder="Password" />
//         </div>


//         <button className="submit-btn">Sign up</button>
//       </div>
//       <div className={`login ${isLoginSlideUp ? "slide-up" : ""}`}>
//         <div className="center">
//           <h2 className="form-title" id="login" onClick={handleLoginClick}>
//             <span>or</span>Log in
//           </h2>
//           <div className="form-holder">
//             <input type="email" className="input" placeholder="Email" />
//             <input type="password" className="input" placeholder="Password" />
//           </div>
//           <button className="submit-btn">Log in</button>
//         </div>
//       </div>
//     </div>
//   );
// }
