/*

 */
"use strict";

const http = require('http');
const path = require('path');
const url = require('url');

const urls = [
    {
        id: 1,
        route: '',
        output: '<h1>Home</h1>'
    },
    {
        id: 2,
        route: 'contact',
        output: '<h1>Contact</h1>'
    },
    {
        id: 3,
        route: 'about-me',
        output: '<h1>About me</h1>'
    }
];

http.createServer((request, response) => {
    
    console.log(path.basename(request.url));
    let id = url.parse(request.url, true).query.id;
    
    urls.forEach(url => {
        if(url.route == path.basename(request.url) || url.id == id){
            response.writeHead(200, {
                "Content-Type" : "text/html"
            });
            response.end(url.output);
        }
    });

    if(!response.finished){
        response.writeHead(404, {
            "Content-Type" : "text/html"
        });
        response.end("Error 404");
    }

}).listen(3000);
console.log("Server running at http://localhost:3000/")