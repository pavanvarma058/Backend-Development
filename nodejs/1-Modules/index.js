const { log } = require('node:console');
const fs = require('node:fs');

const content = fs.readFileSync('notes.txt', 'utf-8');
console.log(content);

// overwrites the file content
fs.writeFileSync('copy.txt', content, 'utf-8');

// appends the content in the file
fs.appendFileSync('copy.txt', "\nhey how are you?", 'utf-8');
