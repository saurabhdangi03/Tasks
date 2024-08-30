// server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-sms", async (req, res) => {
  const { body } = req.body;
  let msgOptions = {
    from: process.env.TWILIO_FROM_NUMBER,
    to: process.env.TO_NUMBER,
    body,
  };
  try {
    const message = await client.messages.create(msgOptions);
    res.json({ success: true, message });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
