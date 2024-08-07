function loadPage(page) {
    const content = document.getElementById('content');
    let html = '';
    
    switch (page) {
        case 'home':
            html = `
                <div class="home-content">
                    <h1>Welcome to Our Website</h1>
                    <p>We are dedicated to providing you with the best services.
                    Highlight any awards, recognitions, or noteworthy projects that demonstrate your organization's success and impact.</p>
                    <img src="Tasks/background.jpg" alt="Home Image" style="max-width: 100%;">
                </div>
            `;
            break;
        case 'about':
            html = `
                <h1>About Page</h1>
                <p>Provide a timeline or narrative of how your organization was founded, key milestones, and significant achievements.</p>
                <img src="Tasks/backgroundd.jpg" alt="About Image" style="max-width: 100%;">
            `;
            break;
        case 'services':
            html = `
                <h1>Services Page</h1>
                <p>Welcome to the Services Page</p>
                <img src="Tasks/backgrounddd.jpg" alt="Services Image" style="max-width: 100%;">
            `;
            break;
        case 'contact':
            html = `
                <h1>Contact Us</h1>
                <form id="contactForm" onsubmit="submitForm(event)">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" required><br>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" rows="4" required></textarea><br>
                    <button type="submit">Submit</button>
                </form>
            `;
            break;
        default:
            html = `
                <div class="home-content">
                    <h1>Welcome to Our Website</h1>
                    <p>We are dedicated to providing you with the best services.</p>
                    <img src="home.jpg" alt="Home Image" style="max-width: 100%;">
                </div>
            `;
            break;
    }

    content.innerHTML = html;
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Replace with your own logic to handle form submission (e.g., AJAX request)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, clear the form fields after submission
    event.target.reset();
}
