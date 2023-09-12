let m = 66;
let n = 18;

// method - 1
// let factorM = [];
// let factorN = [];

// for (let i = 1; i <= m; i++) {
//   if (m % i === 0) {
//     factorM.push(i);
//   }
// }

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     factorN.push(i);
//   }
// }

// let setM = new Set(factorM);
// let setN = new Set(factorN);
// let common = new Set([...setM].filter((x) => setN.has(x)));

// console.log(Math.max(...common));
// console.log(Math.max(...factorN));

// method - 2

// let gcd = 1;
// for (let i = 1; i <= Math.min(m, n); i++) {
//   if (m % i === 0 && n % i === 0) {
//     gcd = i;
//   }
// }

// console.log(gcd);

// method - 3
function gcd(m, n) {
  if (m === 0) {
    return n;
  }
  return gcd(n % m, m);
}

//lcm
console.log((12 * 9) / gcd(12, 9));
