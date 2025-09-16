const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const remainders = [];
let count = 0;

for (let i = 0; i < 10; i++) {
  const num = Number(input[i]);
  const remainder = num % 42;
  
  if (remainders.indexOf(remainder) === -1) {
    remainders.push(remainder);
    count++;
  }
}

console.log(count);