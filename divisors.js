let num = 36;

// brute force
// for (let i = 1; i <= 100; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }
const array1 = [1, -90, 4, 21, 100000];
array1.sort((a, b) => a - b);
// console.log(array1);
// console.log(2e5);
let n = 36;
let arr = [1];

// all divisors of number
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    arr.push(i);

    let j = n / i;
    if (j !== i) {
      arr.push(j);
    }
  }
}

// let n = 36;
// let sum = 0;
// let arr = [];
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     arr.push(i);
//     sum += i;
//     let j = n / i;
//     if (j !== i) {
//       arr.push(j);
//       sum += j;
//     }
//   }
// }

console.log(arr);
