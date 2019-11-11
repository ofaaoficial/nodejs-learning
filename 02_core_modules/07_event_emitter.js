"use stric";
const  { EventEmitter } = require('events');
const pub = new EventEmitter();

pub.on('ofaaevent', message => console.log(message) )
    .once('ofaaevent', message => console.log(`First emmit of message : [${message}]`));

pub.emit('ofaaevent', 'Hello world!');
pub.emit('ofaaevent', "I'm Oscar");

pub.removeAllListeners('ofaaevent');
pub.emit('ofaaevent', 'End emit');

