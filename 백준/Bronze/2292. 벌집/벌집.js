const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = +input[0]

if(a === 1){
  console.log(a)
}
else{
  let range = 1;
  let distance = 1;

  while(range < a){
    distance++
    range += 6 * (distance - 1);
  }

  console.log(distance)
}