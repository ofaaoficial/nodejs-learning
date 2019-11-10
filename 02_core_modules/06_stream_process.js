"use strict";

const stdin = process.stdin;
const stdout = process.stdout;
const user = {};

stdin.setEncoding('utf8');
stdout.write(`
---------------------
    Hello world!
---------------------
`);

function setQuestion(question, call){
    stdin.resume();
    stdout.write(question);
    stdin.once("data", function (response){
        call(response);
    });
}

setQuestion("Como te llamas?", async name => {
    setQuestion(`${await name} que edad tienes?`, async age =>{
        if(age > 1 && age <= 17)
            console.log(`Eres menor de edad`);
        else
            console.log(`Eres mayor de edad`);

        process.exit();
    })
});


