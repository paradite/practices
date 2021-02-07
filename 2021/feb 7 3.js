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
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let merge = [];
  word1 = word1.split('');
  word2 = word2.split('');
  while (word1.length || word2.length) {
    if (word1.length === 0) {
      merge = [...merge, ...word2];
      break;
    }
    if (word2.length === 0) {
      merge = [...merge, ...word1];
      break;
    }
    if (word1[0] > word2[0]) {
      let l = word1.shift();
      merge.push(l);
    } else if (word2[0] > word1[0]) {
      let l = word2.shift();
      merge.push(l);
    } else {
      let i = 1;
      let choice = null;
      while (i <= word1.length - 1 || i <= word2.length - 1) {
        if (word1[i] > word2[i]) {
          choice = word1;
          break;
        } else if (word2[i] > word1[i]) {
          choice = word2;
          break;
        }
        i++;
      }
      if (!choice) {
        let can1 = [...word1, ...word2].join('');
        let can2 = [...word2, ...word1].join('');
        if (can1 > can2) {
          choice = word1;
        } else {
          choice = word2;
        }
      }
      let l = choice.shift();
      merge.push(l);
    }
    // console.log('TCL ~ word1', word1.join(''));
    // console.log('TCL ~ word2', word2.join(''));
    // console.log('TCL ~ merge', merge.join(''));
  }
  return merge.join('');
};
console.log(largestMerge('abcd', 'z'));
console.log(largestMerge('cabaa', 'bcaaa'));
console.log(largestMerge('abcabc', 'abdcaba'));
// prettier-ignore
console.log(largestMerge("ddwdddddddddddddwwddddddwddw", "wwwwwwwwwddwwdwwwwwwwwwwwwwww"));
// prettier-ignore
console.log(largestMerge("nnnnpnnennenpnnnnneenpnn", "nnnennnnnnpnnennnnennnnee"));
