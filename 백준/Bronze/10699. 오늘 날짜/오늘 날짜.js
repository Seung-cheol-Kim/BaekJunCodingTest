const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const today = new Date();
const a = today.getFullYear();
const b = String(today.getMonth() + 1).padStart(2, '0');
const c = String(today.getDate()).padStart(2, '0');

console.log(`${a}-${b}-${c}`);