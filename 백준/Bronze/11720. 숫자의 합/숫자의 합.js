const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0]);
const b = input[1].split('');
let result = 0
for(let i = 0; i < a; i++){
    result += +b[i]
}
console.log(result)

