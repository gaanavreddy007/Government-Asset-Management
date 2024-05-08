// Functionality for Settings and Configuration page can be added here
// This page may involve saving user preferences or configurations to a backend API

// Retrieve user preferences from local storage or backend API
// For demonstration purposes, we'll use static data
document.addEventListener('DOMContentLoaded', function() {
  const notificationEnabled = localStorage.getItem('notificationEnabled') === 'true';
  const emailAddress = localStorage.getItem('emailAddress');

  // Set form fields based on retrieved data
  document.getElementById('notificationEnabled').checked = notificationEnabled;
  document.getElementById('emailAddress').value = emailAddress || '';
});

// Save user preferences when form is submitted
document.getElementById('configurationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get values from form fields
  const notificationEnabled = document.getElementById('notificationEnabled').checked;
  const emailAddress = document.getElementById('emailAddress').value;

  // Save values to local storage or send to backend API
  localStorage.setItem('notificationEnabled', notificationEnabled);
  localStorage.setItem('emailAddress', emailAddress);

  // Optionally, display a success message or redirect to another page
});

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
