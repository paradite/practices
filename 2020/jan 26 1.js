/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  let max = 0;

  const dfs = (cur, index) => {
    const reversed = cur
      .split('')
      .reverse()
      .join('');

    if (cur === reversed) {
      if (cur.length > max) {
        max = cur.length;
      }
    }
    dfs(cur, index + 1);
    dfs(cur + s[index], index + 1);
  };
};
