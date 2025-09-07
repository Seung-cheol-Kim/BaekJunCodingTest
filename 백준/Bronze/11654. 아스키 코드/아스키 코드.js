const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = String(input[0]);

console.log(A.charCodeAt(0));