/**
 * Utilidades para manejar y transformar las rutas de los directorios y archivos en formato de cadena.
 * El sistema de archivos no es consultado para comprobrar si los caminos son validos.
 */
"use strict";

const http = require('http');
const path = require('path');
const urls = [
    {
        route: '',
        output: '<h1>Home</h1>'
    },
    {
        route: 'contact',
        output: '<h1>Contact</h1>'
    },
    {
        route: 'about-me',
        output: '<h1>About me</h1>'
    }
];

http.createServer((request, response) => {
    
    console.log(path.basename(request.url));
    
    urls.forEach(url => {
        if(url.route == path.basename(request.url)){
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