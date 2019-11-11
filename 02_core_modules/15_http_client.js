"use strict";

const http = require('http');
const options = {
    host: 'google.com',
    port: 80,
    path: '/?q=php'
}

http
    .get(options, response => {
        console.log(response);
    })
    .on("error", err => {
        console.log(err.code);
        console.log(err.message);

        console.log(err);
    });