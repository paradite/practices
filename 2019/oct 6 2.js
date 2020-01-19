/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const required = {};
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (required[element]) {
      if (required[element] + 1 > max) {
        max = required[element] + 1;
        // console.log('TCL: required', required);
        // console.log('TCL: element', element);
        // console.log('TCL: max', max);
      }
      required[element + difference] = required[element] + 1;
      // if (difference !== 0) {
      //   delete required[element];
      // }
    } else {
      required[element + difference] = 1;
    }
    // console.log('TCL: required', required);
  }
  return max;
};

console.log(longestSubsequence([1, 2, 3, 4], 1));
console.log(longestSubsequence([1, 3, 5, 7], 1));
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2));
console.log(longestSubsequence([4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0));
