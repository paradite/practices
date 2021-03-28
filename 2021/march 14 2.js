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
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let map = {};
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    mapAdd(map, a);
    mapAdd(map, b);
  }
  let max = 0;
  let ans;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element > max) {
        ans = Number(key);
        max = element;
      }
    }
  }
  return ans;
};
