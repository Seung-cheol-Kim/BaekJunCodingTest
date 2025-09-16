const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

const result = a * b * c
const arr = result.toString().split('')
const count = new Array(10).fill(0)
arr.forEach(item => {
  count[Number(item)]++;
})

count.forEach(item => {
  console.log(item)
})