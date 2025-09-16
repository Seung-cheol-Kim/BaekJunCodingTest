const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const a = input[i];
  let b = 0;
  let c = 0;

  for (let j = 0; j < a.length; j++) {
    if (a[j] === 'O') {
      c++;
      b += c;
    } else {
      c = 0;
    }
  }

  console.log(b);
}