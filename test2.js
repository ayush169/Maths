const isSubset = (arr1, arr2) => {
  const result = arr1.every((val) => arr2.includes(val));
  return result;
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
