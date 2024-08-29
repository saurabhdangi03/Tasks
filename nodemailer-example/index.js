var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saurabhdangi03@gmail.com',
    pass: 'xmin ucfx bksw bptu'
  }
});

var mailOptions = {
  from: 'saurabhdangi03@gmail.com',
  to: 'saurabhdangi01@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was not easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {

    console.log('Email sent: ' + info.response);
  }
});