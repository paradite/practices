/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let max = 0;
  const dfs = (i, ans, map) => {
    // console.log('dfs -> i', i);
    if (i >= s.length) return;
    let c;
    let cur = '';
    while (i < s.length) {
      // console.log('dfs i -> i', i);
      c = s[i];
      cur = cur + c;
      if (map[cur]) {
        // do nothing
      } else {
        map[cur] = true;
        ans++;
        if (ans > max) {
          max = ans;
          // console.log('dfs -> ans', ans);
          // console.log('dfs -> cur', cur);
          // console.log('dfs -> map', map);
        }
        dfs(i + 1, ans, map);
        map[cur] = false;
        ans--;
      }
      i++;
    }
  };
  dfs(0, 0, {});
  return max;
};

console.log(maxUniqueSplit('addbsd'));
