// Retrieve username from local storage
const username = localStorage.getItem('username');

// Display username in the dashboard
if (username) {
  document.getElementById('usernamePlaceholder').textContent = username;
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

// Add event listeners for each button
document.getElementById('notificationsBtn').addEventListener('click', function() {
  // Implement functionality to show notifications
  window.location.href = 'notifications_alerts.html';
});

document.getElementById('settingsBtn').addEventListener('click', function() {
  // Implement functionality to show settings
  window.location.href = 'settings_configuration.html';
});

document.getElementById('securityBtn').addEventListener('click', function() {
  // Implement functionality to show security options
  window.location.href = 'security_compliance.html';
});

document.getElementById('helpBtn').addEventListener('click', function() {
  // Implement functionality to show help information
  window.location.href = 'help_support.html';
});
