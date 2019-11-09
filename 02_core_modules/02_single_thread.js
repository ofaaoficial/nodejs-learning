"use strict";

console.log('Start process');
console.log(`Process id: ${process.id}`);
console.log(`Process title: ${process.title}`);
console.log(`Process path: ${process.execPath}`);
console.log(`Process current path: ${process.cwd()}`);
console.log(`Version of node: ${process.version}`);
console.log(`Version of dependencies: ${process.versions}`);
console.log(`S.O: ${process.platform}`);
console.log(`Architecture of S.O: ${process.arch}`);
console.log(`Time active of node: ${process.uptime()}`);
console.log(`Args of process: ${process.argv}`);

process.argv['param_test'] = 'Hola mundo';

for(let key in process.argv){
    console.log(process.argv[key])
}