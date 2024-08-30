// backend/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
const port = 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

app.post("/send-sms", async (req, res) => {
  const { to, body } = req.body;

  try {
    const message = await client.messages.create({
      body: body,
      from: process.env.TWILIO_FROM_NUMBER,
      to: to,
    });

    res.json({ success: true, message: message.sid });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
