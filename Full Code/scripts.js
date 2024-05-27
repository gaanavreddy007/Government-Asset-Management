document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const loginContainer = document.getElementById('login');
  const dashboardContainer = document.getElementById('dashboard');
  const addNewAssetContainer = document.getElementById('addNewAsset');
  const viewAllAssetsContainer = document.getElementById('viewAllAssets');
  const generateReportsContainer = document.getElementById('generateReports');
  const notificationsContainer = document.getElementById('notifications');
  const settingsContainer = document.getElementById('settings');
  const securityContainer = document.getElementById('security');
  const helpContainer = document.getElementById('help');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernamePlaceholder = document.getElementById('usernamePlaceholder');
  const logoutBtn = document.getElementById('logoutBtn');
  const notificationsBtn = document.getElementById('notificationsBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const securityBtn = document.getElementById('securityBtn');
  const helpBtn = document.getElementById('helpBtn');
  const addNewAssetLink = document.getElementById('addNewAssetLink');
  const viewAllAssetsLink = document.getElementById('viewAllAssetsLink');
  const generateReportsLink = document.getElementById('generateReportsLink');
  const addAssetForm = document.getElementById('addAssetForm');
  const assetList = document.getElementById('assetList');
  const backToDashboardBtns = document.querySelectorAll('.backToDashboardBtn');
  const assets = [];

  // Handle login form submission
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === 'admin' && password === 'password') {
      localStorage.setItem('username', username);
      usernamePlaceholder.textContent = username;
      showSection(dashboardContainer);
    } else {
      alert('Invalid username or password');
    }
  });

  // Function to show a specific section and hide others
  function showSection(section) {
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'none';
    addNewAssetContainer.style.display = 'none';
    viewAllAssetsContainer.style.display = 'none';
    generateReportsContainer.style.display = 'none';
    notificationsContainer.style.display = 'none';
    settingsContainer.style.display = 'none';
    securityContainer.style.display = 'none';
    helpContainer.style.display = 'none';
    section.style.display = 'block';
  }

  if (localStorage.getItem('username')) {
    usernamePlaceholder.textContent = localStorage.getItem('username');
    showSection(dashboardContainer);
  }

  // Logout functionality
  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('username');
    showSection(loginContainer);
  });

  // Handle button clicks to show/hide different sections
  notificationsBtn.addEventListener('click', function () {
    showSection(notificationsContainer);
  });

  settingsBtn.addEventListener('click', function () {
    showSection(settingsContainer);
  });

  securityBtn.addEventListener('click', function () {
    showSection(securityContainer);
  });

  helpBtn.addEventListener('click', function () {
    showSection(helpContainer);
  });

  addNewAssetLink.addEventListener('click', function () {
    showSection(addNewAssetContainer);
  });

  viewAllAssetsLink.addEventListener('click', function () {
    showSection(viewAllAssetsContainer);
    renderAssetList();
  });

  generateReportsLink.addEventListener('click', function () {
    showSection(generateReportsContainer);
  });

  // Handle Add Asset form submission
  addAssetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const assetName = document.getElementById('assetName').value.trim();
    const assetType = document.getElementById('assetType').value.trim();
    const assetValue = document.getElementById('assetValue').value.trim();

    if (assetName && assetType && assetValue) {
      const newAsset = { name: assetName, type: assetType, value: assetValue };
      assets.push(newAsset);
      alert('Asset added successfully');
      updateAssetMetrics();
      addAssetForm.reset();
      showSection(dashboardContainer);
    } else {
      alert('Please fill in all fields');
    }
  });

  // Render asset list
  function renderAssetList() {
    assetList.innerHTML = '';
    if (assets.length === 0) {
      assetList.innerHTML = '<li>No assets available</li>';
    } else {
      assets.forEach(asset => {
        const listItem = document.createElement('li');
        listItem.textContent = `${asset.name} - ${asset.type} - $${asset.value}`;
        assetList.appendChild(listItem);
      });
    }
  }

  // Update asset metrics on the dashboard
  function updateAssetMetrics() {
    const totalAssets = assets.length;
    const activeAssets = assets.length; // Placeholder for active assets count
    const inactiveAssets = 0; // Placeholder for inactive assets count

    document.getElementById('totalAssets').textContent = totalAssets;
    document.getElementById('activeAssets').textContent = activeAssets;
    document.getElementById('inactiveAssets').textContent = inactiveAssets;
  }

  // Back to dashboard buttons
  backToDashboardBtns.forEach(button => {
    button.addEventListener('click', function () {
      showSection(dashboardContainer);
    });
  });

  // Additional functionality for Settings and Configuration
  const configurationForm = document.getElementById('configurationForm');
  configurationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const notificationEnabled = document.getElementById('notificationEnabled').checked;
    const emailAddress = document.getElementById('emailAddress').value.trim();
    if (emailAddress) {
      alert('Settings saved successfully');
      // Save settings to localStorage or send to server
    } else {
      alert('Please enter a valid email address');
    }
  });

  // Additional functionality for Security and Compliance
  document.getElementById('authenticateBtn').addEventListener('click', function () {
    alert('Authentication functionality not implemented');
  });

  document.getElementById('encryptDataBtn').addEventListener('click', function () {
    alert('Data encryption functionality not implemented');
  });

  document.getElementById('decryptDataBtn').addEventListener('click', function () {
    alert('Data decryption functionality not implemented');
  });
});
