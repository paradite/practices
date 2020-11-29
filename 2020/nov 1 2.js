/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let map = {
    5: 1,
    4: 1,
    3: 1,
    2: 1,
    1: 1,
  };
  let ans = 5;
  n--;
  while (n > 0) {
    // console.log('countVowelStrings -> map', map);
    ans = 0;
    let newmap = {};
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const count = map[key];
        const last = Number(key);
        ans += last * count;
        for (let i = 1; i <= last; i++) {
          if (newmap[i]) {
            newmap[i] = newmap[i] + count;
          } else {
            newmap[i] = count;
          }
          // console.log('countVowelStrings -> newmap', newmap);
        }
      }
    }
    map = newmap;
    n--;
  }
  return ans;
};

console.log(countVowelStrings(1));
console.log(countVowelStrings(2));
console.log(countVowelStrings(33));
