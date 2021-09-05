/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  s = s
    .split('')
    .map((x) => x.charCodeAt(0) - 96)
    .join('')
    .split('')
    .map((x) => Number(x));
  for (let i = 0; i < k; i++) {
    // console.log('TCL ~ s', s);
    s = s
      .reduce(function (a, b) {
        return a + b;
      }, 0)
      .toString()
      .split('')
      .map((x) => Number(x));
  }
  // console.log('TCL ~ s', s);
  return Number(s.join(''));
};

console.log(getLucky('iiii', 1));
console.log(getLucky('leetcode', 2));
console.log(getLucky('zbax', 2));
