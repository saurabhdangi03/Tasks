// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'saurabhdangi03@gmail.com',
//     pass: 'xmin ucfx bksw bptu'
//   }
// });

// var mailOptions = {
//   from: 'saurabhdangi03@gmail.com',
//   to: 'saurabhdangi01@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was not easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {

//     console.log('Email sent: ' + info.response);
//   }
// });


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saurabhdangi03@gmail.com',
        pass: 'xmin ucfx bksw bptu'
    }
});

// Serve the HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle email sending
app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: 'saurabhdangi03@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent successfully!' });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
