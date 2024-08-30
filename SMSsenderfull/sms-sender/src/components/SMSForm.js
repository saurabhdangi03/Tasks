// src/components/SMSForm.js

import React, { useState } from "react";
import "./styles.css";

function SMSForm() {
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
        body: JSON.stringify({ body: message }),
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
      <h2>Send SMS</h2>
      <form onSubmit={handleSendSMS}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="submit">Send SMS</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default SMSForm;
