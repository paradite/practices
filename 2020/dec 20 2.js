/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  // console.log('maximumUniqueSubarray -> nums', nums.length);
  let start = 0;
  let end = 0;
  let sum = nums[0];
  let max = sum;
  let csum = [nums[0]];
  csum[-1] = 0;
  let exist = {};
  exist[nums[0]] = 0;
  while (end < nums.length - 1) {
    let next = nums[end + 1];
    csum[end + 1] = csum[end] + next;
    if (exist[next] >= start) {
      sum = sum - (csum[exist[next]] - csum[start]) - nums[start] + next;
      if (sum > max) max = sum;
      start = exist[next] + 1;
      exist[next] = end + 1;
    } else {
      sum = sum + next;
      if (sum > max) max = sum;
      // console.log('maximumUniqueSubarray -> sum', sum);
      exist[next] = end + 1;
    }
    // console.log('maximumUniqueSubarray -> sum', start, end, sum);
    end++;
  }
  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
console.log(
  maximumUniqueSubarray([
    187,
    470,
    25,
    436,
    538,
    809,
    441,
    167,
    477,
    110,
    275,
    133,
    666,
    345,
    411,
    459,
    490,
    266,
    987,
    965,
    429,
    166,
    809,
    340,
    467,
    318,
    125,
    165,
    809,
    610,
    31,
    585,
    970,
    306,
    42,
    189,
    169,
    743,
    78,
    810,
    70,
    382,
    367,
    490,
    787,
    670,
    476,
    278,
    775,
    673,
    299,
    19,
    893,
    817,
    971,
    458,
    409,
    886,
    434,
  ])
);
