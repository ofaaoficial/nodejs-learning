"use strict";

const http = require('http').createServer();
const fs = require('fs');

http.on('request', (request, response)=> {
    
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    fs.readFile('assets/index.html', (err, response)=>{
        if(err) throw err;
        response.end(data);
    });

}).listen(3000);


console.log("Server running at http://localhost:3000/")
