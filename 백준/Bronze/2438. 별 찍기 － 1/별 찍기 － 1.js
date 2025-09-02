const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = parseInt(input[0]);

star = '';

for (let i = 1; i <= A; i++) {
    for(let j = 1; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);