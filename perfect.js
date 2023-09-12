function isPerfectNumber(n) {
  let arr = [1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i);
      let j = n / i;
      if (j !== i) {
        arr.push(j);
      }
    }
  }
  console.log(arr);

  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

// console.log(isPerfectNumber(6));
// isPerfectNumber(36);

// let arr = []
let sum = 1;
let n = 28;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    sum += i;
    let j = n / i;
    if (j !== i) {
      sum += j;
    }
  }
}

console.log(sum);

// let sum = 1;
// for(let i = 0; i <= arr.length -1; i++){
//   sum += arr[i];
// }

// return sum === n ? 1 : 0
