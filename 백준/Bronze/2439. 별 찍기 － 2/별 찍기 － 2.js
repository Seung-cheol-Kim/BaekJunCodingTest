const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const A = parseInt(input[0]);

for(let i = 1; i<=A; i++){
    for(let j = A-i; j>0; j--){
        process.stdout.write(' ');
    }
    for(let k = 0; k<i; k++){
        process.stdout.write('*');
    }
    console.log();
}