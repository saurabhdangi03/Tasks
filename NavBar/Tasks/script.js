document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    // Reset message element
    messageElement.style.color = 'red';

    // Validate full name
    if (fullName === '') {
        messageElement.textContent = 'Full Name is required.';
        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        messageElement.textContent = 'Please enter a valid Email ID.';
        return;
    }

    // Validate mobile number
    if (!mobileRegex.test(mobile)) {
        messageElement.textContent = 'Please enter a valid 10-digit Mobile No.';
        return;
    }

    // Validate username
    if (username === '') {
        messageElement.textContent = 'Username is required.';
        return;
    }

    // Validate password
    if (password.length < 8) {
        messageElement.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!uppercaseRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one uppercase letter.';
        return;
    }
    if (!lowercaseRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one lowercase letter.';
        return;
    }
    if (!digitRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one digit.';
        return;
    }
    if (!specialCharRegex.test(password)) {
        messageElement.textContent = 'Password must contain at least one special character.';
        return;
    }

    // If all validations pass
    messageElement.textContent = 'User registered successfully';
    messageElement.style.color = 'green';

    // Remove the message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        messageElement.textContent = '';
    }, 3000);
});
