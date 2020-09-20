/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  let ans = 0;
  let rankMap = {};
  let pairMap = {};
  for (let i = 0; i < preferences.length; i++) {
    rankMap[i] = {};
    const pref = preferences[i];
    for (let j = 0; j < pref.length; j++) {
      const other = pref[j];
      rankMap[i][other] = j;
    }
  }
  for (let i = 0; i < pairs.length; i++) {
    const [first, second] = pairs[i];
    pairMap[first] = second;
    pairMap[second] = first;
  }
  const check = (x, y) => {
    for (let u = 0; u < n; u++) {
      if (rankMap[x][u] < rankMap[x][y]) {
        let v = pairMap[u];
        if (rankMap[u][x] < rankMap[u][v]) {
          ans++;
          break;
        }
      }
    }
  };
  for (let i = 0; i < pairs.length; i++) {
    const [first, second] = pairs[i];
    check(first, second);
    check(second, first);
  }
  return ans;
};

// prettier-ignore
console.log(unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]));
