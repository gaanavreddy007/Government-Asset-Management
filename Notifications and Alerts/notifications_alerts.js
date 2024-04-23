// Sample notification data (replace with real data)
const notifications = [
  { message: 'Asset 1 has been added successfully.', timestamp: '2022-04-10 10:00:00' },
  { message: 'Asset 2 has been marked as inactive.', timestamp: '2022-04-11 12:00:00' },
  { message: 'New report generated.', timestamp: '2022-04-12 15:00:00' }
  // Add more notification objects as needed
];

// Function to display notifications on the page
document.addEventListener('DOMContentLoaded', function() {
  const notificationListContainer = document.getElementById('notificationList');
  notifications.forEach(notification => {
    const listItem = document.createElement('li');
    listItem.textContent = `${notification.timestamp}: ${notification.message}`;
    notificationListContainer.appendChild(listItem);
  });
});

// Back to Dashboard functionality
document.getElementById('backToDashboardBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
