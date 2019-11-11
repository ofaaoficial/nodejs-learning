"use strict";

const http = require('http').createServer();
const fs = require('fs');
const index = fs.createReadStream('assets/index.html');

http.on('request', (request, response)=> {
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    index.pipe(response);
}).listen(3000);

console.log("Server running at http://localhost:3000/")
