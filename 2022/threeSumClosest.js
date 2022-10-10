/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var searchByValue = function (nums, target, i, j, twoSum) {
    let currMinAbs = Infinity;
    let currClosest = undefined;

    const recurseByValue = (input, target, start, end) => {
      if (start > end) {
        return currClosest;
      }
      let mid = Math.ceil((start + end) / 2);
      if (mid === start && mid === end) {
        return currClosest;
      }
      // console.log('TCL ~ i j mid', i, j, start, end, mid);
      while (mid === i || mid === j) {
        mid--;
      }
      if (mid < start) {
        return currClosest;
      }
      // console.log('TCL ~ i j mid', i, j, start, end, mid);
      const midValue = input[mid] + twoSum;
      const absDiff = Math.abs(midValue - target);
      if (currClosest === undefined || absDiff < currMinAbs) {
        currMinAbs = absDiff;
        currClosest = midValue;
      }
      if (midValue < target) {
        return recurseByValue(input, target, mid + 1, end);
      } else if (midValue > target) {
        return recurseByValue(input, target, start, mid - 1);
      } else {
        return midValue;
      }
    };
    return recurseByValue(nums, target, 0, nums.length - 1);
  };

  nums.sort((a, b) => a - b);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  let res = Infinity;
  let bestDiff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const m = nums[j];
      const twoSum = n + m;
      const best = searchByValue(nums, target, i, j, twoSum);
      const diff = Math.abs(best - target);
      if (diff === 0) return best;
      if (diff < bestDiff) {
        bestDiff = diff;
        res = best;
      }
    }
  }
  return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([-1, 3, 1, 1], 1));
