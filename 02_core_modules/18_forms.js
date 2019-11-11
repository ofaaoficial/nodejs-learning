"use strict";

const http = require('http');
const form = require('fs');
const querystring = require('querystring');
const util = require('util');

let dataString = '';

http.createServer((request, response) => {
    if(request.method == "GET"){
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.end(form.readFileSync('assets/pages/form.html'));
    }else if(request.method == "POST"){
        console.log("Method POST");
        request
            .on("data", data => dataString = data)
            .on("end", () => {
                
                let dataObject = querystring.parse(dataString);                
                let dataJSON = JSON.stringify(dataObject);
                
                console.log(dataObject);
                let str = `
                    ${dataString}                    
                    ${dataJSON}
                `;
            

                console.log(str);
                response.end(str);
            });        
    }

}).listen(3000);

console.log("Server running at http://localhost:3000/")