const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const student = 30;
const arr = input[0].split('\n').map(Number);

for(let i = 1; i <= student; i++) {
    if(!arr.includes(i)) {
        console.log(i);
    }
}