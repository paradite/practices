/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  for (let i = 1; i <= n - 1; i++) {
    const element = i;
    // console.log("TCL: element + ''", element + '');
    if ((element + '').includes('0')) {
      continue;
    }
    const y = n - element;
    if ((y + '').includes('0')) {
      continue;
    }
    return [element, y];
  }
};

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(10000));
console.log(getNoZeroIntegers(69));
console.log(getNoZeroIntegers(1010));
