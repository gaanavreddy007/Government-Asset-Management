// Static sample asset data (replace with real data)
const assets = [
  { id: 1, name: 'Asset 1', status: 'Active', location: 'Warehouse A' },
  { id: 2, name: 'Asset 2', status: 'Inactive', location: 'Warehouse B' },
  { id: 3, name: 'Asset 3', status: 'Active', location: 'Warehouse C' }
  // Add more asset objects as needed
];

// Function to display asset list on the page
document.addEventListener('DOMContentLoaded', function() {
  const assetListContainer = document.getElementById('assetList');
  assets.forEach(asset => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${asset.id}</td>
      <td>${asset.name}</td>
      <td>${asset.status}</td>
      <td>${asset.location}</td>
    `;
    assetListContainer.appendChild(row);
  });
});

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
