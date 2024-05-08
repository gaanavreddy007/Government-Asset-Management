// Function to integrate with an external system
function integrateWithExternalSystem() {
  // Example endpoint URL of the external system's API
  const apiUrl = 'https://api.external-system.com/data';

  // Example data to send to the external system (replace with actual data)
  const requestData = {
    // Example data
    key1: 'value1',
    key2: 'value2'
  };

  // Configuring the fetch request
  const requestOptions = {
    method: 'POST', // HTTP method (GET, POST, etc.)
    headers: {
      'Content-Type': 'application/json' // Specify content type (JSON, form data, etc.)
    },
    body: JSON.stringify(requestData) // Convert data to JSON string
  };

  // Making the fetch request to the external system's API
  fetch(apiUrl, requestOptions)
    .then(response => {
      // Check if request was successful (status code 200-299)
      if (response.ok) {
        // Handle successful response (e.g., parse response JSON)
        return response.json();
      } else {
        // Handle errors (e.g., display error message)
        throw new Error('Failed to fetch data from the external system.');
      }
    })
    .then(data => {
      // Handle response data (e.g., update UI with received data)
      console.log('Received data from external system:', data);
    })
    .catch(error => {
      // Handle fetch errors (e.g., display error message)
      console.error('Error fetching data:', error.message);
    });
}

// Call the integration function when the page loads (or when needed)
document.addEventListener('DOMContentLoaded', function() {
  integrateWithExternalSystem();
});
