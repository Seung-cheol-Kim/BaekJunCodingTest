const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const v = parseInt(input[2]);

let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] === v) {
        count++;
    }
}
console.log(count);