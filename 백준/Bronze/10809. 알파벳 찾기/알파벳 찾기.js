const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();

const result = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < alphabet.length; i++) {
  result.push(S.indexOf(alphabet[i]));
}

console.log(result.join(' '));