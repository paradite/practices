/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let max = 0;
  const getSum = (num) => {
    let sum = num;
    const rightSpaces = n - (index + 1);
    const rightMin = num - rightSpaces;
    if (rightMin >= 1) {
      sum = sum + ((num - 1 + rightMin) * rightSpaces) / 2;
    } else {
      const rightOrdered = num - 1;
      const leftover = rightSpaces - rightOrdered;
      sum = sum + ((num - 1 + 1) * rightOrdered) / 2;
      sum = sum + leftover;
    }

    const leftSpaces = index;
    const leftMin = num - leftSpaces;
    if (leftMin >= 1) {
      sum = sum + ((num - 1 + leftMin) * leftSpaces) / 2;
    } else {
      const leftOrdered = num - 1;
      const leftover = leftSpaces - leftOrdered;
      sum = sum + ((num - 1 + 1) * leftOrdered) / 2;
      sum = sum + leftover;
    }

    return sum;
  };
  const recurse = (target, start, end) => {
    if (start > end) {
      return -1;
    }
    const mid = Math.ceil((start + end) / 2);
    // console.log('TCL ~ mid', mid);
    const result = getSum(mid);
    // console.log('TCL ~ result', result);
    if (result > target) {
      return recurse(target, start, mid - 1);
    } else if (result < target) {
      if (mid > max) max = mid;
      return recurse(target, mid + 1, end);
    } else {
      return mid;
    }
  };
  const result = recurse(maxSum, 0, maxSum);
  if (result === -1) return max;
  return result;
};

console.log(maxValue(4, 2, 6));
console.log(maxValue(6, 1, 10));
console.log(maxValue(553232607, 345559842, 878662478));
// 2
// 3
// 18040
