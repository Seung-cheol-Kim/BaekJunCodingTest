const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = String(input[1]);
const C = String(input[2]);
const D = String(input[3]);

console.log(B[0]+ B[B.length-1]);
console.log(C[0]+ C[C.length-1]);
console.log(D[0]+ D[D.length-1]);