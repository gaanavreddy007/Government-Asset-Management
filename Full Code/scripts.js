document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const loginForm = document.getElementById('loginForm');
  const loginSection = document.getElementById('login-section');
  const userDashboard = document.getElementById('user-dashboard');
  const adminDashboard = document.getElementById('admin-dashboard');
  const userNameSpan = document.getElementById('user-name');
  const adminNameSpan = document.getElementById('admin-name');

  // Admin sections
  const addAssetSection = document.getElementById('add-asset-section');
  const viewAllAssetsSection = document.getElementById('view-all-assets-section');
  const generateReportsSection = document.getElementById('generate-reports-section');
  const notificationsSection = document.getElementById('notifications-section');
  const settingsSection = document.getElementById('settings-section');
  const securitySection = document.getElementById('security-section');
  const helpSection = document.getElementById('help-section');

  // Login
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);

      loginSection.style.display = 'none';

      if (role === 'user') {
        userNameSpan.textContent = username;
        userDashboard.style.display = 'block';
      } else if (role === 'admin') {
        adminNameSpan.textContent = username;
        adminDashboard.style.display = 'block';
      }
    } else {
      alert('Please enter a username and password.');
    }
  });

  // Logout
  document.getElementById('user-logoutBtn').addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  });

  document.getElementById('admin-logoutBtn').addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  });

  // Admin Quick Links
  document.getElementById('admin-addAssetLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    addAssetSection.style.display = 'block';
  });

  document.getElementById('admin-viewAllAssetsLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    viewAllAssetsSection.style.display = 'block';
    displayAssets();
  });

  document.getElementById('admin-generateReportsLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    generateReportsSection.style.display = 'block';
  });

  document.getElementById('admin-notificationsLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    notificationsSection.style.display = 'block';
  });

  document.getElementById('admin-settingsLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    settingsSection.style.display = 'block';
  });

  document.getElementById('admin-securityLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    securitySection.style.display = 'block';
  });

  document.getElementById('admin-helpLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    helpSection.style.display = 'block';
  });

  // Back to Dashboard
  document.querySelectorAll('.backToDashboardBtn')
    .forEach(btn => {
      btn.addEventListener('click', function () {
        hideAllSections();
        adminDashboard.style.display = 'block';
      });
    });

  // Add New Asset
  document.getElementById('addAssetForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const assetName = document.getElementById('assetName').value;
    const assetType = document.getElementById('assetType').value;

    if (assetName && assetType) {
      const assets = JSON.parse(localStorage.getItem('assets')) || [];
      assets.push({ name: assetName, type: assetType });
      localStorage.setItem('assets', JSON.stringify(assets));
      alert('Asset added successfully.');
      document.getElementById('assetName').value = '';
      document.getElementById('assetType').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });

  // Display All Assets
  function displayAssets() {
    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const assetList = document.getElementById('assetList');
    assetList.innerHTML = '';
    assets.forEach(asset => {
      const li = document.createElement('li');
      li.textContent = `${asset.name} - ${asset.type}`;
      assetList.appendChild(li);
    });
  }

  // Notifications
  document.getElementById('configurationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const notificationEnabled = document.getElementById('notificationEnabled').checked;
    const emailAddress = document.getElementById('emailAddress').value;
    alert(`Notifications: ${notificationEnabled ? 'Enabled' : 'Disabled'}, Email: ${emailAddress}`);
  });

  // Security
  document.getElementById('authenticateBtn').addEventListener('click', function () {
    alert('Authentication successful.');
  });

  document.getElementById('encryptDataBtn').addEventListener('click', function () {
    alert('Data encrypted.');
  });

  document.getElementById('decryptDataBtn').addEventListener('click', function () {
    alert('Data decrypted.');
  });

  // Initial Load
  if (localStorage.getItem('username')) {
    loginSection.style.display = 'none';
    if (localStorage.getItem('role') === 'user') {
      userNameSpan.textContent = localStorage.getItem('username');
      userDashboard.style.display = 'block';
    } else if (localStorage.getItem('role') === 'admin') {
      adminNameSpan.textContent = localStorage.getItem('username');
      adminDashboard.style.display = 'block';
    }
  }

  // Hide All Sections
  function hideAllSections() {
    addAssetSection.style.display = 'none';
    viewAllAssetsSection.style.display = 'none';
    generateReportsSection.style.display = 'none';
    notificationsSection.style.display = 'none';
    settingsSection.style.display = 'none';
    securitySection.style.display = 'none';
    helpSection.style.display = 'none';
  }
});
