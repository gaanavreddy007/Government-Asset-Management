// Function to handle asset registration form submission
function handleAssetRegistration(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve asset details from the form
  const assetName = document.getElementById('assetName').value;
  const assetDescription = document.getElementById('assetDescription').value;

  // Perform asset registration logic (e.g., send data to backend API)
  console.log('Asset Name:', assetName);
  console.log('Asset Description:', assetDescription);

  // Reset the form fields
  document.getElementById('assetName').value = '';
  document.getElementById('assetDescription').value = '';

  // Optionally, display a success message or redirect to another page
}

// Add event listener to the asset registration form
document.getElementById('assetRegistrationForm').addEventListener('submit', handleAssetRegistration);

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
