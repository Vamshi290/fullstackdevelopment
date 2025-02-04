const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Listener for the 'userDetails' event
eventEmitter.on('userDetails', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});

// Emit the 'userDetails' event with name and age arguments
eventEmitter.emit('userDetails', 'vamshi', 22);
eventEmitter.emit('userDetails', 'karthik', 20);
