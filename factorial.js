let num = 10;

let numZeroes = 0;
for (let i = 5; i <= num; i *= 5) {
  numZeroes += Math.floor(num / i);
}

console.log(numZeroes);

// prime factors
let num1 = 90;

function primeFactors(num1) {
  let factors = [];
  for (let i = 2; i <= num1; i++) {
    while (num1 % i === 0 && num1 !== 1) {
      factors.push(i);
      num1 /= i;
    }
  }
  return factors;
}

let array = [];
for (let i = 0; i <= num; i++) {
  array.push(...primeFactors(i));
}

let ct = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    ct++;
  }
}

console.log(ct);
// console.log(primeFactors(90));
