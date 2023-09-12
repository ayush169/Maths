const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

//Optimized prime check

const isPrimeOptimized = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < 100; i++) {
  if (isPrimeOptimized(i)) {
    console.log(i);
  }
}
