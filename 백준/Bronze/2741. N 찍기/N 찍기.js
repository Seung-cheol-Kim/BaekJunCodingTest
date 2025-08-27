const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
    console.log(i);
}