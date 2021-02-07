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
 * @return {boolean}
 */
var check = function (nums) {
  let inflection = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) {
      continue;
    } else {
      if (inflection) return false;
      inflection = true;
    }
  }
  if (inflection) {
    return nums[nums.length - 1] <= nums[0];
  }
  return true;
};
