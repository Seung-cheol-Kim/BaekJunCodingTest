const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

const arr2 = [];
for (let i = n + 1; i <= 2 * n; i++) {
    arr2.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
    const result = [];
    for (let j = 0; j < m; j++) {
        result.push(arr[i][j] + arr2[i][j]);
    }
    console.log(result.join(' '));
}
