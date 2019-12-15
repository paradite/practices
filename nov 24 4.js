/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const mod = Math.pow(10, 9) + 7;
  let dp = [];
  for (let i = 0; i < arrLen; i++) {
    dp.push(i === 0 ? 1 : 0);
  }
  for (let i = 1; i <= steps; i++) {
    const newdp = [];
    const remaining = steps - i + 2;
    const maxCompute = remaining > arrLen ? arrLen : remaining;
    for (let j = 0; j < maxCompute; j++) {
      const moveLeft = j + 1 < arrLen ? dp[j + 1] : 0;
      // console.log('TCL: i', i);
      // console.log('TCL: j', j);
      const moveRight = j - 1 >= 0 ? dp[j - 1] : 0;
      // console.log('TCL: moveLeft', moveLeft);
      // console.log('TCL: moveRight', moveRight);
      const stay = dp[j];
      newdp[j] = (moveLeft + moveRight + stay) % mod;
    }
    dp = newdp;
    // console.log('TCL: dp', dp);
  }
  return dp[0];
};

console.log(numWays(3, 2));
console.log(numWays(2, 4));
console.log(numWays(4, 2));
console.log(numWays(27, 7));
console.log(numWays(434, 291270));
