// Initialize an empty array to store user data
let users = [];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Create user object
    let user = {
        username: username,
        email: email,
        password: password
    };

    // Push user object to array
    users.push(user);

    // Store data in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to new page to display user data
    window.location.href = 'userlist.html';
}

// Add form submission event listener
document.getElementById('registrationForm').addEventListener('submit', handleSubmit);
