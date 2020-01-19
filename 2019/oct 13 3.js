/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const mod = Math.pow(10, 9) + 7;
  let dp = {};
  const recurse = (lastDigit, lengthRequired) => {
    if (lengthRequired === 0) {
      return 1;
    }
    if (dp[lastDigit + '-' + lengthRequired] >= 0) {
      return dp[lastDigit + '-' + lengthRequired];
    }
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (i === lastDigit) {
        continue;
      } else {
        const maxLength = rollMax[i];
        for (let j = 1; j <= maxLength; j++) {
          if (j <= lengthRequired) {
            count = (count + recurse(i, lengthRequired - j)) % mod;
          }
        }
      }
    }
    dp[lastDigit + '-' + lengthRequired] = count;
    // console.log('TCL: dp', dp);
    return count;
  };
  return recurse(-1, n);
};

// console.log(dieSimulator(2, [1, 1, 2, 2, 2, 3]));
// console.log(dieSimulator(2, [1, 1, 1, 1, 1, 1]));
// console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3]));
// console.log(dieSimulator(20, [8, 5, 10, 8, 7, 2]));
var start = new Date();
console.log(dieSimulator(5000, [13, 3, 12, 14, 11, 11]));
var end = new Date() - start;
console.log('TCL: end', end);
