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
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function (nums, goal) {
  let min = Infinity;
  nums.sort((a, b) => a - b);
  // console.log('TCL ~ nums', nums);
  const dfs = (index, curr) => {
    if (min === 0) return;
    if (Math.abs(curr - goal) < min) {
      min = Math.abs(curr - goal);
    }
    if (curr > goal && nums[index] > 0) {
      // console.log('TCL ~ curr goal', curr, goal);
      return;
    }
    // console.log('TCL ~ index curr', index, curr);
    if (index === nums.length) {
      // console.log('TCL ~ curr', curr);
      return;
    }
    dfs(index + 1, curr + nums[index]);
    dfs(index + 1, curr);
  };
  dfs(0, 0);
  return min;
};

console.log(minAbsDifference([5, -7, 3, 5], 6));
// prettier-ignore
console.log(minAbsDifference([9210,-5402,8022,-4660,-1719,-9686,3899,8543,-8813,2070,3791,3177,-775,-9400,-7036,-7050,-9843,2563,-1190,5216,-1089,2210,5775,1027,2729,4947,-6183,5850,1616,-5259,3605,-5142], -10259));
console.log(minAbsDifference([7, -9, 15, -2], -5));
// prettier-ignore
console.log(minAbsDifference([3530,-1549,6835,-587,3787,-1033,4205,1006,5918,-2940,6101,3169,3930,-7006,-7889,-5758,-3246,-5098,-2489,-9144,-6617,-1703,-4898,5721,-6758,3078,-3859,-9902,-7079,4014,-8334,8009], 842213514));
