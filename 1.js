let num = 3429;
//num to array met-1
// let arr = Array.from(String(num), Number);

//num to array met-2
// let arr = num.toString().split("").map(Number);

//num to array met-3
// let arr = [];
// while (num > 0) {
//   arr.push(num % 10);
//   num = Math.floor(num / 10);
// }

// console.log(arr);

//str to array
// let str = "Hello World";
// let arr = str.split("");
// console.log(str.split("").reverse().join(""));

let num2 = 322;
let arr2 = Array.from(String(num2), Number).reverse();
let revNum = Number(arr2.join(""));
// console.log(revNum);

let num3 = 563;
let str2 = "";
while (num3 > 0) {
  str2 += num3 % 10;
  num3 = Math.floor(num3 / 10);
}

let newNum = Number(str2);
// console.log(String(newNum) + 5, str2);
// let arr4 = Array.from(String(num3), Number);
// console.log(arr4.length);

let num9 = 9223;

let revNumber = 0;
while (num9 > 0) {
  let lDigit = num9 % 10;
  revNumber = revNumber * 10 + lDigit;
  num9 = Math.floor(num9 / 10);
}
// console.log(revNumber);

let num88 = 4 ** 2;
console.log(num88);
console.log(Math.pow(4, 2));
