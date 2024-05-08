// Function to simulate user authentication
function authenticateUser() {
  // Simulate user authentication process
  const isAuthenticated = true; // Change to false to simulate failed authentication
  return isAuthenticated;
}

// Function to simulate data encryption
function encryptData(data) {
  // Simulate data encryption process
  return btoa(data); // Base64 encode the data
}

// Function to simulate data decryption
function decryptData(encryptedData) {
  // Simulate data decryption process
  return atob(encryptedData); // Decode Base64 encoded data
}

// Authenticate button click event
document.getElementById('authenticateBtn').addEventListener('click', () => {
  if (authenticateUser()) {
    alert('User authenticated successfully!');
  } else {
    alert('Authentication failed. Please try again.');
  }
});

// Encrypt Data button click event
document.getElementById('encryptDataBtn').addEventListener('click', () => {
  const testData = 'Sensitive Data'; // Example data to encrypt
  const encryptedData = encryptData(testData);
  alert(`Data encrypted successfully:\n${encryptedData}`);
});

// Decrypt Data button click event
document.getElementById('decryptDataBtn').addEventListener('click', () => {
  const encryptedData = prompt('Enter encrypted data:');
  if (encryptedData) {
    const decryptedData = decryptData(encryptedData);
    alert(`Data decrypted successfully:\n${decryptedData}`);
  }
});

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
