/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// dp prefix sum / cumulative sum
// dp[a] = b: there are "b" positions (starting from 0) with "a" odd numbers
// dp[n - k] * dp[n]: number of positions to get "k" odd numbers (starting with "n-k" and ending with "n")
var numberOfSubarrays = function(nums, k) {
  let ans = 0;
  let dp = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (dp[count] >= 0) {
      dp[count]++;
    } else {
      dp[count] = 1;
    }
    if (element % 2 !== 0) {
      count++;
    }
  }
  if (dp[count] >= 0) {
    dp[count]++;
  } else {
    dp[count] = 1;
  }
  for (const key in dp) {
    if (dp.hasOwnProperty(key)) {
      const keyN = +key;
      if (dp.hasOwnProperty(keyN - k)) {
        ans += dp[keyN] * dp[keyN - k];
      }
    }
  }
  // console.log('TCL: dp', dp);
  return ans;
};

// sliding window
// var numberOfSubarrays = function(nums, k) {
//   let ans = 0;
//   let start = 0;
//   let prev = -1;
//   let end = 0;
//   let oddCount = 0;
//   while (start <= end && end < nums.length) {
//     oddCount += nums[end] % 2;
//     if (nums[start] % 2 === 0) {
//       start++;
//     }
//     if (oddCount === k) {
//       ans += start - prev;
//       // console.log('TCL: start end ans', start, end, ans);
//     } else if (oddCount > k) {
//       prev = start;
//       start++;
//       while (nums[start] % 2 === 0) {
//         start++;
//       }
//       oddCount--;
//       ans += start - prev;
//       // console.log('TCL: start end ans', start, end, ans);
//     }
//     end++;
//   }
//   return ans;
// };

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
console.log(numberOfSubarrays([1, 1, 1, 1, 1], 1));
