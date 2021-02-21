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
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let ans = new Array(boxes.length).fill(0);
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    if (element === '1') {
      for (let j = 0; j < ans.length; j++) {
        if (i !== j) {
          const dist = Math.abs(i - j);
          ans[j] = ans[j] + dist;
        }
      }
    }
  }
  return ans;
};
