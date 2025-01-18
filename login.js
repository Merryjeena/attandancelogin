// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get form values
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (additional server-side validation recommended)
    if (!role || !email || !username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Store data (excluding password for security)
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);

    // Redirect to another page
    switch (role) {
        case 'admin':
            window.location.href = 'admin-dashboard.html';
            break;
        case 'student':
            window.location.href = 'student-dashboard.html';
            break;
        case 'faculty':
            window.location.href = 'faculty-dashboard.html';
            break;
        default:
            alert('Invalid role selected.');
            break;
});
