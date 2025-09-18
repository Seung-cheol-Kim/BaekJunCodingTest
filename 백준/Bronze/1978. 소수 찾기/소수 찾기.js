const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0];
let b = input[1].split(' ');
let count = 0;

b.forEach(item => {
  const num = item;
  if (num < 2) {
    return;
  }
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
  }
});

console.log(count);