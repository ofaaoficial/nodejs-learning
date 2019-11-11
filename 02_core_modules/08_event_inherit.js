"use strict";

const { EventEmitter } = require('events');

class Clock extends EventEmitter{

    constructor(){
        super();
        setInterval(()=>{
            this.emit('tictac');
        }, 1000);
    }

    time(){
        this.date = new Date();
        console.log( `${this.addZero(this.date.getHours())} : ${this.addZero(this.date.getMinutes())} : ${this.addZero(this.date.getSeconds())}` );
    }

    addZero(number){
        return number < 10 ? `0${number}` : number;
    }
}

const rloj = new Clock();
rloj.on('tictac', () => rloj.time());
