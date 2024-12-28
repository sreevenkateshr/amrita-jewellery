const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const apiUrl = ' https://www.goldapi.io/api/status'; // Gold in INR
const silverApiUrl = ' https://www.goldapi.io/api/status'; // Silver in INR

async function fetchRates() {
    try {
        // Fetch gold rate
        const goldResponse = await fetch(apiUrl, {
            headers: { 'x-access-token': apiKey }
        });
        const goldData = await goldResponse.json();
        const goldRate = goldData.price;

        // Fetch silver rate
        const silverResponse = await fetch(silverApiUrl, {
            headers: { 'x-access-token': apiKey }
        });
        const silverData = await silverResponse.json();
        const silverRate = silverData.price;

        // Display rates
        document.getElementById('gold-rate').textContent = `₹${goldRate.toFixed(2)} per gram`;
        document.getElementById('silver-rate').textContent = `₹${silverRate.toFixed(2)} per gram`;
    } catch (error) {
        console.error('Error fetching rates:', error);
        document.getElementById('gold-rate').textContent = 'Error loading rate';
        document.getElementById('silver-rate').textContent = 'Error loading rate';
        // document.getElementById('gold-rate').textContent = '₹5000.00 per gram (default)';
        // document.getElementById('silver-rate').textContent = '₹65.00 per gram (default)';

    }
}

function showCustomization(malai) {
    // Show customization form on product click
    document.getElementById('customizationForm').style.display = 'block';

    // Display product details dynamically based on clicked product
    const productDetails = {
        sandalwood: "<p><strong>Sandalwood Malai</strong><br>Size: 4mm, 6mm, 8mm, 10mm<br>Material: Gold, Silver, Copper</p>",
        karungali: "<p><strong>Karungali Malai</strong><br>Size: 4mm, 6mm, 8mm, 10mm<br>Material: Gold, Silver, Copper</p>",
        rudraksha: "<p><strong>Rudraksha Malai</strong><br>Size: 4mm, 6mm, 8mm, 10mm<br>Material: Gold, Silver, Copper</p>",
        gemstone: "<p><strong>Gemstone Malai</strong><br>Size: 4mm, 6mm, 8mm, 10mm<br>Material: Gold, Silver, Copper</p>"
    };

    // Set the product details inside the customization form
    document.getElementById('productDetails').innerHTML = productDetails[malai];
}

fetchRates();
