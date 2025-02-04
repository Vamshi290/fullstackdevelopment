const fs = require('fs');

// Path to the file you want to append text to
const filePath = './text.txt'; // Change this to your desired file path

// Text to append to the file
const textToAppend = 'This is the appended text.\n';

// Append text to the file
fs.appendFile(filePath, textToAppend, (err) => {
    if (err) {
        console.error(`Error appending text: ${err.message}`);
        return;
    }

    console.log('Text appended successfully!');

    // Read the file content after appending the text
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
        }

        // Log the file content to the console
        console.log('File Content after appending:\n', data);
    });
});
