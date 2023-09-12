// method - 1
function primeFactors(num1) {
  let factors = [1];
  for (let i = 2; i <= num1; i++) {
    while (num1 % i === 0) {
      factors.push(i);
      num1 /= i;
    }
  }
  return factors;
}

console.log(primeFactors(90));
