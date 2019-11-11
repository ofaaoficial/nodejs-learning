/*

 */
"use strict";

const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const urls = [
    {
        id: 1,
        route: '',
        output: 'assets/index.html'
    },
    {
        id: 2,
        route: 'contact',
        output: 'assets/pages/contact.html'
    },
    {
        id: 3,
        route: 'about-me',
        output: 'assets/pages/about-me.html'
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
            fs.readFile(url.output, async (err, data)=> {
                if(err) throw err;                
                response.end(await data);
            })            
        }else{
            fs.readFile('assets/pages/404.html', (err, data)=>{
                if(err) throw err;
                response.end(data);
            })  
        }
    });


}).listen(3000);
console.log("Server running at http://localhost:3000/")
