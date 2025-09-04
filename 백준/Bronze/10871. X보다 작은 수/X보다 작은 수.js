const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, x] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let result = arr.filter(num => num < x);
console.log(result.join(' ')); 

