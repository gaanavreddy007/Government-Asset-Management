// Retrieve username from local storage
const username = localStorage.getItem('username');

// Display username in the dashboard
if (username) {
  document.getElementById('username').textContent = username;
} else {
  // Redirect to login page if username is not found in local storage
  window.location.href = 'index.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
  // Clear local storage
  localStorage.removeItem('username');
  localStorage.removeItem('isLoggedIn');
  
  // Redirect to login page
  window.location.href = 'index.html';
});
