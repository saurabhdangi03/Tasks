// src/components/SMSForm.js

import React, { useState } from "react";
import "./styles.css";

function SMSForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendSMS = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: mobileNumber, body: message }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSendSMS}>
      <h2>Send SMS</h2>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />
        <button type="submit">Send SMS</button>
      </form>
      {status && <p>{status}</p>}

      {/* Creative Background Shapes */}
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
}

export default SMSForm;
