// Retrieve asset details from local storage or from backend API
// For demonstration purposes, we'll use static data
const assetDetails = {
  name: 'Asset Name',
  description: 'Asset Description'
  // Add more details as needed
};

// Display asset details on the page
document.addEventListener('DOMContentLoaded', function() {
  const assetDetailsContainer = document.getElementById('assetDetails');
  assetDetailsContainer.innerHTML = `
    <p><strong>Name:</strong> ${assetDetails.name}</p>
    <p><strong>Description:</strong> ${assetDetails.description}</p>
    <!-- Add more asset details here as needed -->
  `;
});

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
