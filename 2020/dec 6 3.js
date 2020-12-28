/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const mod = Math.pow(10, 9) + 7;
  let sum = 0;
  let prevRem = 0;
  let diff = 2;
  for (let i = n; i >= 1; i--) {
    const number = i;
    const bn = number.toString(2);
    // console.log('concatenatedBinary -> bn', bn);
    for (let j = bn.length - 1; j >= 0; j--) {
      const element = bn[j];
      // console.log('concatenatedBinary -> element', element);
      let rem;
      if (i === n && j === bn.length - 1) {
        rem = 1;
      } else {
        rem = ((prevRem % mod) * (diff % mod)) % mod;
      }
      prevRem = rem;
      if (element === '1') {
        sum = (sum + rem) % mod;
      }
    }
  }
  return sum;
};

console.log(concatenatedBinary(1));
console.log(concatenatedBinary(3));
console.log(concatenatedBinary(12));
