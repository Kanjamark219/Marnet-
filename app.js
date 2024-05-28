// Store credentials in local storage (for testing purposes only)
localStorage.setItem('username', 'test');
localStorage.setItem('password', 'test');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve stored credentials from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page upon successful login
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password.  Please try again.');
    }
});
