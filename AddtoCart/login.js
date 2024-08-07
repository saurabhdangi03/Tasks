document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded user credentials for demonstration
    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' }
    ];

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        alert('Login successful!');
        const redirectTo = sessionStorage.getItem('redirectTo');
        if (redirectTo) {
            window.location.href = redirectTo;
            sessionStorage.removeItem('redirectTo');
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert('Invalid login credentials');
    }
});
