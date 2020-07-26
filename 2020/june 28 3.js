/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  let start = null;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element <= target) {
      start = i;
      break;
    }
  }
  if (start === null) {
    return 0;
  }
  let end = start;
  let ans = 0;
  let max = nums[start];
  let min = nums[start];
  let lastend = null;
  while (end <= start && end < nums.length) {
    if (end + 1 < nums.length) {
      const nextend = nums[end + 1];
      if (nextend < min) {
        min = nextend;
        end = end + 1;
      } else if (nextend > max) {
        if (min + nextend <= target) {
          max = nextend;
          end = end + 1;
        } else {
          if (end === start) {
          } else {
            if (lastend === null || lastend !== end) {
              console.log(start, end);
              lastend = end;
            }
            // update start
            if (nums[start] === min && nums[start + 1] < min) {
              min = nums[start + 1];
            } else if (nums[start] === max && nums[start + 1] > max) {
              max = nums[start + 1];
            }
            start = start + 1;
          }
        }
      } else {
        end = end + 1;
      }
    }
  }
};
