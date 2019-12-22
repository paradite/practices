/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  let max = Math.max(...nums);
  return recurse(nums, threshold, 1, max, max);
};

const recurse = (nums, target, start, end, best) => {
  // console.log('TCL: best', best);
  if (start > end) {
    return best;
  }
  const mid = Math.ceil((start + end) / 2);
  // console.log('TCL: mid', mid);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // console.log('TCL: element', element);
    // console.log('TCL: Math.ceil(element / mid)', Math.ceil(element / mid));
    sum = sum + Math.ceil(element / mid);
  }
  // console.log('TCL: target', target);
  // console.log('TCL: sum', sum);
  if (sum <= target) {
    if (mid < best) {
      best = mid;
    }
    return recurse(nums, target, start, mid - 1, best);
  } else if (sum > target) {
    return recurse(nums, target, mid + 1, end, best);
  } else {
    return mid;
  }
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([2, 3, 5, 7, 11], 11));
console.log(smallestDivisor([19], 5));
console.log(smallestDivisor([1, 2, 3], 1000000));
console.log(smallestDivisor([962551, 933661, 905225, 923035, 990560], 10));
