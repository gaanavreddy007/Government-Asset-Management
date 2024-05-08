// Function to handle form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic (e.g., call backend API)
  // For demonstration purposes, use a simple check
  if (username === 'admin' && password === 'password') {
    // Save login data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', true);

    // Redirect to the dashboard or perform other actions upon successful login
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
  } else {
    // Display error message for failed authentication
    alert('Incorrect username or password. Please try again.');
  }
}

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLogin);
