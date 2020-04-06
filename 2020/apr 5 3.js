/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  const map = {};
  map['a'] = a;
  map['b'] = b;
  map['c'] = c;
  const pickBiggest = last => {
    let max = 0;
    let biggest;
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        if (last === key) continue;
        const element = map[key];
        if (element > max) {
          biggest = key;
          max = element;
        }
      }
    }
    return biggest;
  };
  const pickRealBiggest = () => {
    let max = 0;
    let biggest;
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const element = map[key];
        if (element > max) {
          biggest = key;
          max = element;
        }
      }
    }
    return biggest;
  };
  let ans = '';
  let next = pickBiggest();
  let max = pickRealBiggest();
  while (next) {
    // console.log('longestDiverseString -> next', next);
    // console.log('longestDiverseString -> max', max);
    if (map[next] === 1) {
      ans = ans + next;
      map[next] = 0;
    } else {
      if (next !== max) {
        if (map[next] < map[max]) {
          ans = ans + next;
          map[next] = map[next] - 1;
        } else {
          ans = ans + next + next;
          map[next] = map[next] - 2;
        }
      } else {
        ans = ans + next + next;
        map[next] = map[next] - 2;
      }
    }
    next = pickBiggest(next);
    max = pickRealBiggest();
  }
  return ans;
};

console.log(longestDiverseString(1, 1, 7));
console.log(longestDiverseString(2, 2, 1));
console.log(longestDiverseString(7, 1, 0));
console.log(longestDiverseString(0, 8, 11));
console.log(longestDiverseString(4, 42, 7));
// console.log('bbcbbcbbcbbabbcbbabbcbbabbcbbabbcbb');
