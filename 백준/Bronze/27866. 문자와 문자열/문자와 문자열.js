const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = String(input[0]);
const B = parseInt(input[1]);

console.log(A.charAt(B - 1));