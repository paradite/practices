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
var countHomogenous = function (s) {
  const dp = {
    1: 1,
  };
  let arr = [];
  let cur = s[0];
  let curCount = 1;
  for (let i = 1; i < s.length; i++) {
    const element = s[i];
    if (element === cur) {
      curCount++;
    } else {
      arr.push(curCount);
      curCount = 1;
      cur = element;
    }
  }
  if (curCount) arr.push(curCount);
  const calc = (n) => {
    if (dp[n]) return dp[n];
    return (calc(n - 1) + n) % mod;
  };
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    const count = arr[i];
    ans += calc(count) % mod;
  }
  return ans;
};
