const fs = require('fs');

// Path to the file you want to read
const filePath = './file.txt'; // Change this to your file's path
// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        // Handle error (e.g., file not found)
        console.error(`Error reading file: ${err.message}`);
        return;
    }

    // If no error, print the file content
    console.log('File Content:\n', data);
});
