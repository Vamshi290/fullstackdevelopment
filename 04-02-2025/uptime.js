const os = require('os');

// Function to track and display system uptime
function trackUptime() {
    setInterval(() => {
        // Get the system uptime in seconds
        const uptimeSeconds = os.uptime();
        
        // Calculate the days, hours, and minutes
        const days = Math.floor(uptimeSeconds / (3600 * 24));
        const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((uptimeSeconds % 3600) / 60);
        
        // Display the uptime in a user-friendly format
        console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
        console.log('----------------------------------------');
    }, 5000); // Update every 5 seconds
}

// Start tracking system uptime
trackUptime();
