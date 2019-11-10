/**
 * Streams
 *      'Chorros' de informacion que se trasmiten en 'Pedazos o partes' (Chunks)
 *      3 Tipos: Lectura / Escritura / Duplex.
 *      Instacias de EventEmitter
 *      Acceso Asincrono
 *      Es raro crear streams directamente
 *      Detras de muchos mecanismos de node.js
 *          stdin/stdout
 *          request de HTTP
 *          Sockets
 *          Manipulacion de ficheros / imagenes
 */
"use strict";

const fs = require("fs");
/**
 * Leer un archivo
 */
const readStream = fs.createReadStream('assets/names.txt');
/**
 * Crear una copia de un archivo
 */
const writeStream = fs.createWriteStream('assets/names_copy.txt');

    readStream.pipe(writeStream);

    readStream
        .on("data", function(chunk){
            console.log(`${chunk.length} Caracteres`);
        })
        .on("end", function(){
            console.log(`Finished`);
        });