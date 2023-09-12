const getPrimeRange = (m, n) => {
  let num = Math.max(m, n);
  let primes = new Array(num + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }
  let primeArr = [];
  for (let i = Math.min(m, n); i < primes.length; i++) {
    if (primes[i]) {
      primeArr.push(i);
    }
  }
  return primeArr;
};

console.log(getPrimeRange(10, 19));
