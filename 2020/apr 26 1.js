/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '0') {
      zeros++;
    } else {
      ones++;
    }
  }
  let ans = ones;
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const char = s[i];
    if (char === '1') {
      ans--;
    } else {
      ans++;
    }
    if (ans > max) {
      max = ans;
    }
  }
  return max;
};

console.log(maxScore('011101'));
console.log(maxScore('00111'));
console.log(maxScore('1111'));
console.log(maxScore('01'));
console.log(maxScore('10'));
