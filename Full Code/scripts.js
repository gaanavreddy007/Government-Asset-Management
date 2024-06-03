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
        displayUserAssets();
      } else if (role === 'admin') {
        adminNameSpan.textContent = username;
        adminDashboard.style.display = 'block';
        displayMetrics();
      }
    } else {
      alert('Please enter a username and password.');
    }
  });

  // Logout
  document.getElementById('user-logoutBtn').addEventListener('click', function () {
    userDashboard.style.display = 'none';
    loginSection.style.display = 'block';
    localStorage.clear();
  });

  document.getElementById('admin-logoutBtn').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    loginSection.style.display = 'block';
    localStorage.clear();
  });

  // Admin navigation
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
    generateReports();
  });

  document.getElementById('admin-notificationsLink').addEventListener('click', function () {
    adminDashboard.style.display = 'none';
    notificationsSection.style.display = 'block';
    displayNotifications();
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
  document.querySelectorAll('.backToDashboardBtn').forEach(function (button) {
    button.addEventListener('click', function () {
      addAssetSection.style.display = 'none';
      viewAllAssetsSection.style.display = 'none';
      generateReportsSection.style.display = 'none';
      notificationsSection.style.display = 'none';
      settingsSection.style.display = 'none';
      securitySection.style.display = 'none';
      helpSection.style.display = 'none';
      adminDashboard.style.display = 'block';
    });
  });

  // Add Asset Form
  document.getElementById('addAssetForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const assetName = document.getElementById('assetName').value;
    const assetType = document.getElementById('assetType').value;

    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const newAsset = {
      id: assets.length + 1,
      name: assetName,
      type: assetType,
      created_at: new Date().toLocaleString()
    };
    assets.push(newAsset);
    localStorage.setItem('assets', JSON.stringify(assets));
    alert('Asset added successfully');
    addAssetSection.style.display = 'none';
    adminDashboard.style.display = 'block';
    displayAssets();
  });

  // Display Assets
  function displayAssets() {
    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const assetList = document.getElementById('assetList');
    assetList.innerHTML = '';
    assets.forEach(asset => {
      const li = document.createElement('li');
      li.textContent = `ID: ${asset.id}, Name: ${asset.name}, Type: ${asset.type}, Created At: ${asset.created_at}`;
      assetList.appendChild(li);
    });
  }

  // Display User Assets
  function displayUserAssets() {
    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const userAssetList = document.getElementById('user-assetList');
    userAssetList.innerHTML = '';
    assets.forEach(asset => {
      const li = document.createElement('li');
      li.textContent = `ID: ${asset.id}, Name: ${asset.name}, Type: ${asset.type}, Created At: ${asset.created_at}`;
      userAssetList.appendChild(li);
    });
  }

  // Generate Reports
  function generateReports() {
    const reportList = document.getElementById('reportList');
    reportList.innerHTML = '';
    const assets = JSON.parse(localStorage.getItem('assets')) || [];
    const totalAssets = assets.length;
    const assetTypes = assets.reduce((acc, asset) => {
      acc[asset.type] = (acc[asset.type] || 0) + 1;
      return acc;
    }, {});
    const li1 = document.createElement('li');
    li1.textContent = `Total Assets: ${totalAssets}`;
    reportList.appendChild(li1);
    for (const [type, count] of Object.entries(assetTypes)) {
      const li = document.createElement('li');
      li.textContent = `Type: ${type}, Count: ${count}`;
      reportList.appendChild(li);
    }
  }

  // Display Notifications
  function displayNotifications() {
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = '';
    const notifications = [
      'Notification 1: System maintenance scheduled.',
      'Notification 2: New asset type added.',
      'Notification 3: Report generated successfully.'
    ];
    notifications.forEach(notification => {
      const li = document.createElement('li');
      li.textContent = notification;
      notificationList.appendChild(li);
    });
  }

  // Security Features
  document.getElementById('authenticateBtn').addEventListener('click', function () {
    alert('Authenticated successfully');
  });

  document.getElementById('encryptDataBtn').addEventListener('click', function () {
    alert('Data encrypted successfully');
  });

  document.getElementById('decryptDataBtn').addEventListener('click', function () {
    alert('Data decrypted successfully');
  });

  // Settings
  document.getElementById('configurationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const notificationEnabled = document.getElementById('notificationEnabled').checked;
    const emailAddress = document.getElementById('emailAddress').value;
    localStorage.setItem('notificationEnabled', notificationEnabled);
    localStorage.setItem('emailAddress', emailAddress);
    alert('Settings saved successfully');
  });

  // Initialize
  const savedUsername = localStorage.getItem('username');
  const savedRole = localStorage.getItem('role');

  if (savedUsername && savedRole) {
    loginSection.style.display = 'none';
    if (savedRole === 'user') {
      userNameSpan.textContent = savedUsername;
      userDashboard.style.display = 'block';
      displayUserAssets();
    } else if (savedRole === 'admin') {
      adminNameSpan.textContent = savedUsername;
      adminDashboard.style.display = 'block';
      displayMetrics();
    }
  }

  // Populate key metrics
  function displayMetrics() {
    const keyMetrics = [
      'Total Assets: 10',
      'New Assets This Month: 2',
      'Pending Maintenance: 1'
    ];
    const keyMetricsList = document.getElementById('key-metrics');
    keyMetricsList.innerHTML = '';
    keyMetrics.forEach(metric => {
      const li = document.createElement('li');
      li.textContent = metric;
      keyMetricsList.appendChild(li);
    });
  }

  // Pre-populate assets
  if (!localStorage.getItem('assets')) {
    const initialAssets = [
      { id: 1, name: 'Laptop', type: 'Electronics', created_at: '2023-01-01 12:00:00' },
      { id: 2, name: 'Projector', type: 'Electronics', created_at: '2023-02-15 09:30:00' },
      { id: 3, name: 'Office Chair', type: 'Furniture', created_at: '2023-03-10 14:20:00' }
    ];
    localStorage.setItem('assets', JSON.stringify(initialAssets));
  }
});
