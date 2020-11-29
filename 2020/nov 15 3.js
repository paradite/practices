/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let rightMap = {
    [x]: 0,
  };
  let cur = 0;
  let min = Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    cur += element;
    if (x - cur < 0) {
      break;
    }
    if (x - cur === 0) {
      min = nums.length - i;
      break;
    }
    rightMap[x - cur] = nums.length - i;
  }
  // console.log('minOperations -> rightMap', rightMap);
  cur = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    cur += element;
    // console.log('minOperations -> cur', cur);
    if (rightMap[cur] >= 0) {
      let count = i + 1 + rightMap[cur];
      if (count < nums.length && count < min) min = count;
    }
  }
  if (min === Infinity) return -1;
  return min;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
console.log(minOperations([5, 2, 3, 1, 1], 5));
