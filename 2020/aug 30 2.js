/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let subs = [];
  let cur = [];
  cur.negative = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      cur.push(element);
      if (element < 0) {
        cur.negative++;
      }
    } else {
      if (cur.length > 0) {
        subs.push(cur);
        cur = [];
        cur.negative = 0;
      }
    }
  }
  if (cur.length > 0) {
    subs.push(cur);
  }
  let ans = 0;
  for (let i = 0; i < subs.length; i++) {
    const sub = subs[i];
    if (sub.negative % 2 === 0) {
      if (sub.length > ans) {
        ans = sub.length;
      }
    } else {
      for (let j = 0; j < sub.length; j++) {
        const t1 = sub[j];
        const t2 = sub[sub.length - 1 - j];
        if (t1 < 0 || t2 < 0) {
          if (sub.length - j - 1 > ans) {
            ans = sub.length - j - 1;
          }
          break;
        }
      }
    }
  }
  return ans;
};

console.log(getMaxLen([1, -2, -3, 4]));
console.log(getMaxLen([0, 1, -2, -3, -4]));
console.log(getMaxLen([-1, -2, -3, 0, 1]));
