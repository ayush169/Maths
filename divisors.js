let num = 36;

for (let i = 1; i <= 100; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
const array1 = [1, -90, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1);
