const squareMap = {
  1: true,
  4: true,
  9: true,
  16: true,
  25: true,
  36: true,
  49: true,
  64: true,
  81: true,
  100: true,
  121: true,
  144: true,
  169: true,
  196: true,
  225: true,
  256: true,
  289: true,
  324: true,
  361: true,
  400: true,
  441: true,
  484: true,
  529: true,
  576: true,
  625: true,
  676: true,
  729: true,
  784: true,
  841: true,
  900: true,
  961: true,
  1024: true,
  1089: true,
  1156: true,
  1225: true,
  1296: true,
  1369: true,
  1444: true,
  1521: true,
  1600: true,
  1681: true,
  1764: true,
  1849: true,
  1936: true,
  2025: true,
  2116: true,
  2209: true,
  2304: true,
  2401: true,
  2500: true,
  2601: true,
  2704: true,
  2809: true,
  2916: true,
  3025: true,
  3136: true,
  3249: true,
  3364: true,
  3481: true,
  3600: true,
  3721: true,
  3844: true,
  3969: true,
  4096: true,
  4225: true,
  4356: true,
  4489: true,
  4624: true,
  4761: true,
  4900: true,
  5041: true,
  5184: true,
  5329: true,
  5476: true,
  5625: true,
  5776: true,
  5929: true,
  6084: true,
  6241: true,
  6400: true,
  6561: true,
  6724: true,
  6889: true,
  7056: true,
  7225: true,
  7396: true,
  7569: true,
  7744: true,
  7921: true,
  8100: true,
  8281: true,
  8464: true,
  8649: true,
  8836: true,
  9025: true,
  9216: true,
  9409: true,
  9604: true,
  9801: true,
  10000: true,
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (squareMap[n]) {
    return 1;
  }

  const dp = {};
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    if (squareMap[i]) {
      dp[i] = 1;
    } else {
      dp[i] = i;
      for (let j = 1; j * j <= i; j++) {
        const best = 1 + dp[i - j * j];
        dp[i] = Math.min(best, dp[i]);
      }
    }
  }
  return dp[n];
};

console.log(numSquares(12));
console.log(numSquares(13));
// console.log(numSquares(16));
console.log(numSquares(9996));
console.log(numSquares(9997));
console.log(numSquares(9998));
console.log(numSquares(9999));
console.log(numSquares(10000));
// console.log(numSquares(1));
// console.log(numSquares(2));
// console.log(numSquares(3));
// console.log(numSquares(4));
// console.log(numSquares(5));
