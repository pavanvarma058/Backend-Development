const { log } = require('console');
const fs = require('fs');

fs.readFile('notes.txt', 'utf-8', (err, data)=>{
    if(err) {
        console.error("Error reading this file");
    }
    console.log(data);
})

const content = fs.readFileSync('notes.txt', 'utf-8');
console.log(content);