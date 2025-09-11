const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = 0;
let b = 0;
for(i = 0; i < input.length; i++){
    if(+input[i] > a){
        a = +input[i]
        b = i
    }
}
console.log(a)
console.log(b + 1)