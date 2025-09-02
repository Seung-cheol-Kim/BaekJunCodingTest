const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);

let result = 1;
for (let i = 1; i <= N; i++) {
    result *= i;
}

console.log(result);