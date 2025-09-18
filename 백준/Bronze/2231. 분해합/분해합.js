const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = +input[0]
let sum = 0
for(let i = 1; i <= a; i++){
  let num = i;
  let sum2 = 0;
  
  const digits = String(i);
  for (let j = 0; j < digits.length; j++) {
    sum2 += Number(digits[j]);
  }
  
  const Sum3 = num + sum2;
  
  if (Sum3 === a) {
    sum = i;
    break;
  }
}
console.log(sum)