const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputArr = input.map((item) => item.split(' ').map(Number));

while (inputArr.length) {
  const [a, b] = inputArr.shift();

  if (a === 0 && b === 0) break;
    console.log(a + b);
}