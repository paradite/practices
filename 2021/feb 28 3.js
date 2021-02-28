// prettier-ignore
if (typeof _ === 'undefined') {
  _ = require('lodash');
}

// map utils
const mapPush = (map, key, value) => {
  if (map[key]) {
    map[key].push(value);
  } else {
    map[key] = [value];
  }
};

const mapAdd = (map, key) => {
  if (map[key]) {
    map[key] = map[key] + 1;
  } else {
    map[key] = 1;
  }
};

// Remove
Array.prototype.remove = function (val) {
  const index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

const mod = Math.pow(10, 9) + 7;

// set equal
const isSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  let min1 = nums1.length;
  let min2 = nums2.length;
  let max1 = min1 * 6;
  let max2 = min2 * 6;
  if (min1 > max2 || max1 < min2) {
    return -1;
  }
  let sum1 = _.sum(nums1);
  let sum2 = _.sum(nums2);
  if (sum1 > sum2) {
    let tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
    let ts = sum1;
    sum1 = sum2;
    sum2 = ts;
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b).reverse();
  let ops = 0;
  while (sum1 < sum2) {
    let diff = sum2 - sum1;
    if (diff <= 6 - nums1[0] || diff < nums2[0] - 1) {
      return ops + 1;
    } else {
      if (6 - nums1[0] >= nums2[0] - 1) {
        sum1 = sum1 + (6 - nums1[0]);
        nums1.shift();
        ops++;
      } else {
        sum2 = sum2 - (nums2[0] - 1);
        nums2.shift();
        ops++;
      }
    }
  }
  return ops;
};

console.log(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2]));
console.log(minOperations([1, 1, 1, 1, 1, 1, 1], [6]));
