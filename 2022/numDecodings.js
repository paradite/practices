/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') {
    return 0;
  }
  const dp = [];
  dp[0] = 1;
  if (Number(`${s[0]}${s[1]}`) > 26 && s[1] === '0') {
    return 0;
  }
  if (Number(`${s[0]}${s[1]}`) <= 26) {
    dp[1] = s[1] === '0' ? 1 : 2;
  } else {
    dp[1] = s[1] === '0' ? 1 : 1;
  }
  let zeroCount = s[1] === '0' ? 1 : 0;
  for (let i = 2; i < s.length; i++) {
    const char = s[i];
    if (char === '0') {
      zeroCount++;
    } else {
      zeroCount = 0;
    }
    if (zeroCount === 2) {
      return 0;
    }
    dp[i] = 0;
    if (char !== '0') {
      dp[i] += dp[i - 1];
    }
    if (s[i - 1] !== '0') {
      const twoN = Number(`${s[i - 1]}${char}`);
      if (twoN <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  // console.log('TCL ~ dp', dp);
  return dp[s.length - 1];
};

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('06'));
console.log(numDecodings('27'));
console.log(numDecodings('301'));
console.log(numDecodings('201'));
// console.log(numDecodings('10001'));
// console.log(numDecodings('1001'));
// console.log(numDecodings('101'));
// console.log(numDecodings('111'));
// console.log(numDecodings('112406295284'));
// console.log(numDecodings('112206295284'));
// console.log(numDecodings('112216215284'));
