/**
 * Buffer
 * Es una tira de byte (Datos bianarios)
 * Similar a un array de enteros
 * Tiene un tamaño fijo
 * Se puede manipular datos directamente
 *      Sockects
 *      Streams
 *      Protocolos
 *      Ficheros/Imagenes
 *      Criptografia
 */
"use strict";

const   buffer1 = new Buffer.alloc(100),
        buffer2 = new Buffer.alloc(26),
        str = '\u00bd + \u00bc = \u00b3';

console.log(
    buffer1.write('abcd', 0, 4, 'ascii'),
    buffer1.toString('ascii'),
    str,
    `${str.length} caracteres`,
    `${Buffer.byteLength(str, 'utf8')} bytes`
);


for(let index in buffer2.length){
    buffer2[index] = index + 97;
}

console.log(
    buffer2,
    buffer2.length,
    buffer2.toString('ascii')
);