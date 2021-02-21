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
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let min = Infinity;
  let count = 0;
  let n = 1;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== String(n)) {
      count++;
    }
    n = 1 - n;
  }
  min = count;
  count = 0;
  n = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== String(n)) {
      count++;
    }
    n = 1 - n;
  }
  if (count < min) min = count;
  return min;
};
