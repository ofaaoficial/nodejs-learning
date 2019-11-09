const fs = require("fs");

console.log('Open file... ');

console.log('-- Content file --');

//with function callback
/**
 * Callback
 * Es un código que se pasa por medio de un argumento.
 * Se logra un comportamiento asíncrono, es decir, de no bloqueo.
 * 
 * Tiene un problema el callback hell.
 * Una buena práctica es nombrar la función y luego llamarla.
 */
let content = fs.readFile('file.txt', 'utf8', function(err, con) {
    console.log(con)
});

console.log('-- End content file --');

console.log('Finished');

console.log(process.uptime());