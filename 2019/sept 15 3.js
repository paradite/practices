/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  const mod = Math.pow(10, 9) + 7;
  const dpEnd = [arr[0]];
  let max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    const num = arr[index];
    dpEnd[index] = dpEnd[index - 1] > 0 ? dpEnd[index - 1] + num : num;
    if (dpEnd[index] > max) {
      max = dpEnd[index];
    }
  }
  const dpStart = [];
  dpStart[arr.length - 1] = [arr[arr.length - 1]];
  for (let index = arr.length - 1; index >= 0; index--) {
    const num = arr[index];
    dpStart[index] = dpStart[index + 1] > 0 ? dpStart[index + 1] + num : num;
  }
  // console.log('TCL: dpEnd', dpEnd);
  // console.log('TCL: dpStart', dpStart);
  // console.log('TCL: max', max);
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum > 0) {
    if (dpEnd[arr.length - 1] > 0) {
      if (dpStart[0] > 0) {
        max = Math.max(max, (dpEnd[arr.length - 1] + sum * (k - 2) + dpStart[0]) % mod);
      } else {
        max = Math.max(max, (dpEnd[arr.length - 1] + sum * (k - 1)) % mod);
      }
    } else {
      if (dpStart[0] > 0) {
        max = Math.max(max, (sum * (k - 1) + dpStart[0]) % mod);
      } else {
        max = Math.max(max, (sum * k) % mod);
      }
    }
  } else {
    if (dpEnd[arr.length - 1] > 0) {
      if (dpStart[0] > 0) {
        max = Math.max(max, (dpEnd[arr.length - 1] + dpStart[0]) % mod);
      } else {
        max = Math.max(max, dpEnd[arr.length - 1] % mod);
      }
    } else {
      if (dpStart[0] > 0) {
        max = Math.max(max, +dpStart[0] % mod);
      } else {
        max = Math.max(max);
      }
    }
  }
  return Math.max(max, 0);
};

console.log(kConcatenationMaxSum([1, 2], 3));
console.log(kConcatenationMaxSum([1, -2, 1], 5));
console.log(kConcatenationMaxSum([-1, -2], 7));
console.log(kConcatenationMaxSum([30, -100, 30, 30], 7));
