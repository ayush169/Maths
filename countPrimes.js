function checkPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (checkPrime(i)) {
      count++;
    }
  }
  return count;
};
