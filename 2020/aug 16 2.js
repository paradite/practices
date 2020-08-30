/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i * 2 + 1);
  }
  const ave = arr.reduce((a, b) => a + b) / n;
  let cost = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cost += Math.abs(ave - element);
  }
  return cost / 2;
};

console.log(minOperations(3));
console.log(minOperations(4));
console.log(minOperations(5));
console.log(minOperations(6));
