// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYAx9EiFJCU-qiJk5l_er9ZeFphsjeeHY",
    authDomain: "send-otp-f079a.firebaseapp.com",
    projectId: "send-otp-f079a",
    storageBucket: "send-otp-f079a.appspot.com",
    messagingSenderId: "663961139241",
    appId: "1:663961139241:web:1c1e5b949eb4bba2ca4438",
    measurementId: "G-1GHFLR17YQ"
};

// Initializing Firebase
firebase.initializeApp(firebaseConfig);
render();
// Initialize EmailJS
(function(){
    emailjs.init("S1e1y1IytUinN-EIh");
})();

let emailOTP; // Global variable to store the email OTP
let coderesult; // Global variable to store the phone OTP confirmation result

// Function to generate random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send email OTP
function sendEmailOTP() {
    emailOTP = generateOTP();
    const email = document.getElementById('email').value;
    
    const templateParams = {
        to_email: email,
        otp: emailOTP
    };

    emailjs.send('service_dcdmao5', 'template_rf4ypkm', templateParams)
        .then((response) => {
            console.log('Email OTP sent:', response.status, response.text);
            document.getElementById('email-otp-input').style.display = '';
            alert('Email OTP sent successfully!');
        }, (error) => {
            console.error('Failed to send email OTP:', error);
            alert('Failed to send email OTP. Please try again.');
        });
}

// Function to verify email OTP
function verifyEmailOTP() {
    const userOTP = document.getElementById('emailOTP').value;
    return userOTP === emailOTP;
}

// Render recaptcha verifier
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// Function to send phone OTP
function sendOTP() {
    const number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            coderesult = confirmationResult;
            document.getElementById('phone-otp-input').style.display = '';
            alert('Phone OTP sent successfully!');
        }).catch(function (error) {
            alert(error.message);
        });
}

// Function to verify phone OTP
function verifyPhoneOTP() {
    const code = document.getElementById('verificationCode').value;
    return coderesult.confirm(code).then(function () {
        return true;
    }).catch(function () {
        return false;
    });
}

// Function to verify all OTPs
function verifyAllOTPs() {
    const isEmailVerified = verifyEmailOTP();
    verifyPhoneOTP().then((isPhoneVerified) => {
        if (isEmailVerified && isPhoneVerified) {
            document.querySelector('.number-input').style.display = 'none';
            document.querySelector('.result').style.display = '';
            document.querySelector('.correct').style.display = '';
            console.log('Both OTPs Verified');
        } else {
            document.querySelector('.number-input').style.display = 'none';
            document.querySelector('.result').style.display = '';
            document.querySelector('.incorrect').style.display = '';
            console.log('Verification Failed');
        }
    });
}

// Initialize recaptcha on page load
window.onload = function() {
    render();
};
