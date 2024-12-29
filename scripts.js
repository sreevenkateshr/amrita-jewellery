const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const apiUrl = ' https://www.goldapi.io/api/status'; // Gold in INR
const silverApiUrl = ' https://www.goldapi.io/api/status'; // Silver in INR

    async function fetchRates() {
        try {
            const apiKey = "goldapi-3t4pgsm59cqtbo-io"; // Replace with your API key
            const url = `https://www.goldapi.io/api/XAU/INR`; // Endpoint for gold rate
            const urlSilver = `https://www.goldapi.io/api/XAG/INR`; // Endpoint for silver rate

            const headers = {
                "x-access-token": apiKey,
                "Content-Type": "application/json"
            };

            // Fetch Gold Rate
            const goldResponse = await fetch(url, { headers });
            const goldData = await goldResponse.json();

            // Fetch Silver Rate
            const silverResponse = await fetch(urlSilver, { headers });
            const silverData = await silverResponse.json();

            // Extract rates (per gram or troy ounce based on API docs)
            const goldRate = goldData.price; // Adjust if API returns a different key
            const silverRate = silverData.price; // Adjust if API returns a different key

            // Update HTML
            document.getElementById("gold-rate").textContent = `₹${goldRate} per gram`;
            document.getElementById("silver-rate").textContent = `₹${silverRate} per gram`;
        } catch (error) {
            console.error("Error fetching rates:", error);
            document.getElementById("gold-rate").textContent = "Unable to fetch rate.";
            document.getElementById("silver-rate").textContent = "Unable to fetch rate.";
        }
    }

    // Call fetchRates on page load
    document.addEventListener("DOMContentLoaded", fetchRates);


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
