/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let ans = 0;
  let start = 0;
  let end = 0;
  let currentSum = 0;
  for (let i = 0; i < s.length; i++) {
    if (Math.abs(s.charCodeAt(i) - t.charCodeAt(i)) <= maxCost) {
      start = i;
      end = i;
      ans = 1;
      currentSum = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
      break;
    } else {
      end++;
    }
  }
  while (end <= s.length - 1) {
    // console.log('TCL: end', end);
    const next = end + 1;
    if (next > s.length - 1) {
      return ans;
    }
    const nextCost = Math.abs(s.charCodeAt(next) - t.charCodeAt(next));
    if (nextCost + currentSum <= maxCost) {
      // console.log('TCL: currentSum', currentSum);
      // console.log('TCL: nextCost', nextCost);
      currentSum = nextCost + currentSum;
      end = next;
      // console.log('TCL: start', start);
      // console.log('TCL: end', end);
      if (end - start + 1 > ans) {
        ans = end - start + 1;
      }
    } else if (nextCost + currentSum > maxCost && nextCost <= maxCost) {
      currentSum = currentSum - Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
      start = start + 1;
      if (start === next) {
        currentSum = Math.abs(s.charCodeAt(next) - t.charCodeAt(next));
        end = start;
        if (ans < 1) {
          ans = 1;
        }
      }
    } else if (nextCost > maxCost) {
      start = next + 1;
      end = next + 1;
      while (start < s.length - 1) {
        if (Math.abs(s.charCodeAt(start) - t.charCodeAt(start)) > maxCost) {
          start++;
          end++;
        } else {
          currentSum = Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
          if (ans < 1) {
            ans = 1;
          }
          break;
        }
      }
    }
  }
  // const dp1 = [];
  // const dp = [];
  // [cost, length]
  // dp1[0] = [Math.abs(s.charCodeAt(0) - t.charCodeAt(0)), 1];
  // if (dp1[0][0] <= maxCost) {
  //   ans = dp1[0][1];
  // }
  // for (let i = 1; i < s.length; i++) {
  //   const cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  //   if (cost + dp1[i - 1][0] <= maxCost) {
  //     dp1[i] = [cost + dp1[i - 1][0], dp1[i - 1][1] + 1];
  //   } else if (cost <= maxCost) {
  //     dp1[i] = [cost, 1];
  //   } else {
  //     dp1[i] = [0, 0];
  //   }
  //   if (dp1[i][1] > ans) {
  //     ans = dp1[i][1];
  //   }
  // }
  // dp[s.length - 1] = [Math.abs(s.charCodeAt(s.length - 1) - t.charCodeAt(s.length - 1)), 1];
  // if (dp[s.length - 1][0] <= maxCost && dp[s.length - 1][0] > ans) {
  //   ans = dp[s.length - 1][1];
  // }
  // for (let i = s.length - 2; i >= 0; i--) {
  //   const cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  //   if (cost + dp[i + 1][0] <= maxCost) {
  //     dp[i] = [cost + dp[i + 1][0], dp[i + 1][1] + 1];
  //   } else if (cost <= maxCost) {
  //     dp[i] = [cost, 1];
  //   } else {
  //     dp[i] = [0, 0];
  //   }
  //   if (dp[i][1] > ans) {
  //     ans = dp[i][1];
  //   }
  // }
  // console.log(dp);
  // console.log(dp1);

  return ans;
};

console.log(equalSubstring('abcd', 'bcdf', 3));
console.log(equalSubstring('abcd', 'cdef', 3));
console.log(equalSubstring('abcd', 'acde', 0));
console.log(equalSubstring('bbcd', 'acde', 0));
console.log(equalSubstring('ujteygggjwxnfl', 'nstsenrzttikoy', 43));
console.log(equalSubstring('szrpjazjjhorzeiduufspm', 'rgwdrgligareauwihaqroy', 55));
console.log(equalSubstring('anryddgaqpjdw', 'zjhotgdlmadcf', 5));
