const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');
  let result = '';

  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(Number(R));
  }
  
  console.log(result);
}