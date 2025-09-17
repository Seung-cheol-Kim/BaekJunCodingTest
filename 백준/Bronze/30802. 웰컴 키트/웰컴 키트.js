const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0];
let b = input[1].split(' ');
let c = input[2].split(' ');
let count = 0;
b.forEach(item => {
  count += Math.ceil(item / c[0]);
});
console.log(count);

console.log(Math.floor(a / c[1]),a % c[1]);