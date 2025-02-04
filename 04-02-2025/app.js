// app.js
const EventManagement = require('./EventManagement');

// Create an instance of the EventManagement class
const eventManager = new EventManagement();

// Listen for 'start' event
eventManager.on('start', () => {
    console.log('Listener: Event started.');
});

// Listen for 'in-progress' event
eventManager.on('in-progress', () => {
    console.log('Listener: Event in progress.');
});

// Listen for 'completed' event
eventManager.on('completed', () => {
    console.log('Listener: Event completed.');
});

// Simulating event flow
eventManager.startEvent();
eventManager.inProgressEvent();
eventManager.completedEvent();
