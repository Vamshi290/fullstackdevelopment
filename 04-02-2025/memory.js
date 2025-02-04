const os = require('os');

// Function to track and display memory usage
function trackMemoryUsage() {
    setInterval(() => {
        // Get total and free memory in bytes
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        
        // Calculate the percentage of free memory
        const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

        // Convert bytes to gigabytes for easier readability
        const totalMemoryGB = (totalMemory / (1024 ** 3)).toFixed(2);
        const freeMemoryGB = (freeMemory / (1024 ** 3)).toFixed(2);

        // Display memory usage and percentage
        console.log(`Total Memory: ${totalMemoryGB} GB`);
        console.log(`Free Memory: ${freeMemoryGB} GB`);
        console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
        console.log('----------------------------------------');
    }, 5000); // Update every 5 seconds
}

// Start tracking memory usage
trackMemoryUsage();
