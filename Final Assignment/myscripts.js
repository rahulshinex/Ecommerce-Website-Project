document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === 'admin@admin.com' && password === '123456') {
            alert('Login successful');
        } else {
            alert('Incorrect email or password');
        }
    });
});
