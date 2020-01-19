/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const a = [];
  if (n % 2 === 1) {
    a.push(0);
    n -= 1;
    n = n / 2;
  } else {
    n = n / 2;
  }
  for (let i = 1; i <= n; i++) {
    a.push(i);
    a.push(0 - i);
  }
  return a;
};

console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(2));
console.log(sumZero(1));
console.log(sumZero(0));
