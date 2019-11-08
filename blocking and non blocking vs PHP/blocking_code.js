const fs = require("fs");

console.log('Open file... ');

console.log('-- Content file --');

let content = fs.readFileSync('file.txt', 'utf8');

console.log(content)

console.log('-- End content file --');

console.log('Finished');

console.log(process.uptime());