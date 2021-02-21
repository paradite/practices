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
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let start = 1;
  let end = mod;

  let best = mod;

  const getCount = (min) => {
    // console.log('TCL ~ min', min);
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (element > min) {
        total += Math.ceil(element / min) - 1;
      }
    }
    // console.log('TCL ~ total', total);

    return total;
  };

  const recurse = (target, start, end) => {
    if (start > end) {
      return best;
    }
    // console.log('TCL ~ start', start);
    // console.log('TCL ~ end', end);
    const mid = Math.ceil((start + end) / 2);
    // console.log('TCL ~ mid', mid);
    if (getCount(mid) > target) {
      return recurse(target, mid + 1, end);
    } else if (getCount(mid) < target) {
      if (mid < best) best = mid;
      return recurse(target, start, mid - 1);
    } else {
      if (mid < best) best = mid;
      return recurse(target, start, mid - 1);
    }
  };

  return recurse(maxOperations, start, end);
};

console.log(minimumSize([9], 2));
console.log(minimumSize([2, 4, 8, 2], 4));
console.log(minimumSize([7, 17], 2));
