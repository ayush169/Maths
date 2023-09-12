const leastPrimeFactor = (n) => {
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        if (isPrime[j]) {
          isPrime[j] = false;
        }
      }
    }
  }
  let leastPrimes = [0];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      leastPrimes.push(i);
    } else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (isPrime[j] && i % j === 0) {
          leastPrimes.push(j);
          break;
        }
      }
    }
  }
  return leastPrimes;
};

console.log(leastPrimeFactor(6));
