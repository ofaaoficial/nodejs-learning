"use strict";

const http = require('http');
const options = {
    host: 'platzi.com',
    port: 80,
    path: '/?q=php'
}

let html = "";

http
    .get(options, response => {
        response.on('data', data => html = data)
    })
    .on("error", err => {
        console.log(err.code);
        console.log(err.message);
        console.log(err);
    });

    http.createServer((request, response) => {
        
            response.writeHead(200,{
                "Content-Type" : "text/html"
            });
            response.end(html);
        
    }).listen(3000);

    console.log("Server runnig at http://localhost:3000/");