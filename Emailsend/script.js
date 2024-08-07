// Initialize EmailJS with your user ID
emailjs.init("S1e1y1IytUinN-EIh");

document.getElementById('sendOtpButton').addEventListener('click', sendOtp);
document.getElementById('registrationForm').addEventListener('submit', validateOtp);

let generatedOtp = '';

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOtp() {
    generatedOtp = generateOtp();
    const email = document.getElementById('email').value;
    const otpMessage = document.getElementById('otpMessage');

    if (!email) {
        otpMessage.textContent = 'saurabhdangi03@gmail.com';
        otpMessage.className = 'message error';
        return;
    }

    const templateParams = {
        to_email: email,
        otp: generatedOtp
    };

    emailjs.send('service_dcdmao5', 'template_rf4ypkm', templateParams)
        .then(function(response) {
            otpMessage.textContent = 'OTP has been sent to your email.';
            otpMessage.className = 'message success';
            console.log('SUCCESS!', response.status, response.text);
            // setTimeout(() => {
            //     otpMessage.textContent = '';
            //     document.getElementById('fullname').value = '';
            //     document.getElementById('email').value = '';
            // }, 3000); // Clear the message and email field after 3 seconds
        }, function(error) {
            otpMessage.textContent = 'Failed to send OTP. Please try again.';
            otpMessage.className = 'message error';
            console.log('FAILED...', error);
        });
}

function validateOtp(event) {
    event.preventDefault();

    const enteredOtp = document.getElementById('otp').value;
    const registrationMessage = document.getElementById('registrationMessage');

    if (enteredOtp === generatedOtp) {
        registrationMessage.textContent = 'Registration successful!';
        registrationMessage.className = 'message success';
    } else {
        registrationMessage.textContent = 'Invalid OTP. Please try again.';
        registrationMessage.className = 'message error';
    }
}

