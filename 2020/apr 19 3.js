/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  const nextMap = {
    c: 'r',
    r: 'o',
    o: 'a',
    a: 'k',
    k: ''
  };
  const map = {
    r: 0,
    o: 0,
    a: 0,
    k: 0
  };
  let cur = 0;
  let ans = 0;
  for (let i = 0; i < croakOfFrogs.length; i++) {
    const c = croakOfFrogs[i];
    // console.log('minNumberOfFrogs -> i', i, c);
    // console.log('minNumberOfFrogs -> map', map);
    let found = false;
    if (map[c]) {
      found = true;
      map[c] = map[c] - 1;
      if (nextMap[c]) {
        map[nextMap[c]] = map[nextMap[c]] + 1;
      } else {
        cur--;
      }
    }
    if (!found) {
      if (c === 'c') {
        if (cur >= ans || ans === 0) {
          ans++;
          // console.log('minNumberOfFrogs -> ans', ans);
        }
        cur++;
        map.r = map.r + 1;
      } else {
        return -1;
      }
    }
  }
  if (cur > 0) return -1;
  return ans;
};

console.log(minNumberOfFrogs('croakcroak'));
console.log(minNumberOfFrogs('crcoakroak'));
console.log(minNumberOfFrogs('croakcrook'));
console.log(minNumberOfFrogs('croakcroa'));
console.log(minNumberOfFrogs('croakcroakcroak'));
console.log(minNumberOfFrogs('crocakcrrooaakcrokak'));
