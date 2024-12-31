// API URL with your access key
const apiUrl = 'https://metals-api.com/api/latest?access_key=y31t36uwtx23l0cqp2nmkzm2hkl7e58qa7467yxez6hty0elsy99glr1s4e7&base=INR&symbols=XAU,XAG';

// Function to fetch and display the rates
async function getRates() {
    try {
        // Fetch data from the Metals API
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the response data to check its structure
        console.log(data);

        // Check if the rates data is available
        if (data.success) {
            const goldRate = data.rates.XAU;  // Gold rate (XAU)
            const silverRate = data.rates.XAG;  // Silver rate (XAG)

            // Display the fetched rates in the HTML elements
            document.getElementById('gold-rate').textContent = `₹ ${goldRate}`;
            document.getElementById('silver-rate').textContent = `₹ ${silverRate}`;
        } else {
            // Show an error message if rates data is not available
            throw new Error('Failed to fetch rates');
        }
    } catch (error) {
        console.error('Error fetching rates:', error);
        document.getElementById('gold-rate').textContent = 'Error loading rate';
        document.getElementById('silver-rate').textContent = 'Error loading rate';
    }
}

// Call the function to fetch and display the rates when the page loads
getRates();


