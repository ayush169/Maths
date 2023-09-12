// for (i = 1; i * i <= 100; i++) {
//   console.log(i);
// }

// for (i = 1; i <= Math.sqrt(100); i++) {
//   console.log(i);
// }

// for (i = 1; i <= 100; i++) {
//   if (i * i <= 100) {
//     console.log(i);
//   }
// }

// let arr = new Array(10).fill(true);

// console.log(arr);

let n = 20;
for (let i = 2; i <= Math.sqrt(n); i++) {
  for (let j = i * i; j <= n; j += i) {
    console.log(j);
  }
}
