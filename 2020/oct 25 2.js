/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let ans = [];
  for (let i = 0; i < l.length; i++) {
    let start = l[i];
    let end = r[i];
    let arr = nums.slice(start, end + 1);
    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];
    let j;
    for (j = 2; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] === diff) {
        continue;
      } else {
        break;
      }
    }
    if (j === arr.length) {
      ans.push(true);
    } else {
      ans.push(false);
    }
    // console.log('checkArithmeticSubarrays -> arr', arr);
  }
  return ans;
};
