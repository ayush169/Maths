const check = (num) => {
  let n = num.toString().length;
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let lDigit = temp % 10;
    sum += Math.pow(lDigit, n);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
};

// for (let i = 0; i < 100000; i++) {
//   if (check(i)) {
//     console.log(i);
//   }
// }

let num = 24;
let arr = Array.from(String(num), Number);
let n = num.toString().length;

let sum = arr.reduce((acc, curr) => {
  return acc + Math.pow(curr, n);
}, 0);
console.log(sum);
