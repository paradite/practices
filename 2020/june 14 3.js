/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  let ans = Infinity;
  let memo = {};
  const recurse = (left, currMax, start) => {
    // console.log('minDays -> bloomDay', bloomDay);
    if (left === 0) {
      if (currMax < ans) {
        ans = currMax;
      }
    }

    if (currMax > ans) {
      return;
    }
    for (let i = start; i < bloomDay.length; i++) {
      let max = 0;
      let valid = true;
      for (let j = i; j < k + i && j < bloomDay.length; j++) {
        if (j === bloomDay.length - 1 && j !== k + i - 1) {
          valid = false;
          break;
        }
        const b = bloomDay[j];
        if (b === -1) {
          valid = false;
          break;
        } else {
          if (b > max) {
            max = b;
          }
        }
      }
      if (valid) {
        // console.log('recurse -> i', i);
        // console.log('recurse -> left', left);
        // console.log('recurse -> bloomDay', bloomDay);
        const p = [];
        let pmax = currMax;
        if (max > currMax) {
          currMax = max;
        }

        for (let j = i; j < k + i && j < bloomDay.length; j++) {
          p[j] = bloomDay[j];
          bloomDay[j] = -1;
        }
        recurse(left - 1, currMax, k + i);
        for (let j = i; j < k + i && j < bloomDay.length; j++) {
          bloomDay[j] = p[j];
        }
        currMax = pmax;
      } else {
      }
    }
  };
  recurse(m, 0, 0);
  if (ans == Infinity) {
    return -1;
  }
  return ans;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 2));
console.log(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2));
// prettier-ignore
console.log(minDays([8, 3, 10, 9, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5], 5, 5));
