// JavaScript to toggle the side drawer
const hamburger = document.getElementById('ham');
const navLinks = document.getElementById('side-drawer');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
    // Remove 'inactive' and add 'active' when opening the drawer
    navLinks.classList.remove('inactive');
    navLinks.classList.add('active');
    console.log(navLinks);
});

close.addEventListener('click', () => {
    // Replace 'active' with 'inactive' when closing the drawer
    navLinks.classList.remove('active');
    navLinks.classList.add('inactive');
    console.log(navLinks);
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!username || !password) {
        errorMessage.textContent = 'Please enter both username and password.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Proceed with form submission or API call for authentication
        // For example:
        // login(username, password);
    }
});
