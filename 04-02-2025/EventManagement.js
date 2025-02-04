// EventManagement.js
const EventEmitter = require('events');

class EventManagement extends EventEmitter {
    startEvent() {
        console.log('Event has started.');
        this.emit('start');
    }

    inProgressEvent() {
        console.log('Event is in progress.');
        this.emit('in-progress');
    }

    completedEvent() {
        console.log('Event has been completed.');
        this.emit('completed');
    }
}

module.exports = EventManagement;
