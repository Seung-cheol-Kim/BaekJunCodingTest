const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let nums = input[i].split(' ').map(Number);

  if (nums[0] === 0 && nums[1] === 0 && nums[2] === 0) {
    break;
  }

  nums.sort((a, b) => a - b);

  const [a, b, c] = nums;

  if (a * a + b * b === c * c) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}