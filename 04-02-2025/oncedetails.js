const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Listener for the 'oneTimeEvent' that will only respond once
eventEmitter.once('oneTimeEvent', () => {
    console.log('This event is handled only the first time!');
});

// Emit the 'oneTimeEvent' multiple times
eventEmitter.emit('oneTimeEvent'); // Will trigger the listener
eventEmitter.emit('oneTimeEvent'); // Will not trigger the listener again