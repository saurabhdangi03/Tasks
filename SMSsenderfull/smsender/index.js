const express = require('express');
const bodyParser = require('body-parser');
const sendSMS = require('./sendSMS');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/send', (req, res) => {
    const { phoneNumber, message } = req.body;
    sendSMS(phoneNumber, message);
    res.send('SMS sent successfully!');
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
