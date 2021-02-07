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
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let count = 0;
  const pick = (arr) => {
    const [a, b, c] = arr;
    if ((a === 0 && b === 0) || (b === 0 && c === 0) || (a === 0 && c === 0))
      return;
    arr.sort((a, b) => a - b);
    // console.log('TCL ~ arr', arr);
    if (arr[0] === 0) {
      arr[1] = arr[1] - 1;
    } else {
      arr[0] = arr[0] - 1;
    }
    arr[arr.length - 1] = arr[arr.length - 1] - 1;
    count++;
    pick(arr);
  };
  pick([a, b, c]);
  return count;
};

console.log(maximumScore(2, 4, 6));
console.log(maximumScore(0, 0, 0));
console.log(maximumScore(0, 1, 1));
