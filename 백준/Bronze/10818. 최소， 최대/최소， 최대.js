const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0];
let b = input[1].split(' ').map(Number);

console.log(Math.min(...b), Math.max(...b));