document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: to,
            subject: subject,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error sending email';
    });
});
