/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let total = 0;
  const dfs = (n) => {
    if (n === 1) return;
    if (n % 2 === 0) {
      total += n / 2;
      dfs(n / 2);
    } else {
      total += (n - 1) / 2;
      dfs((n + 1) / 2);
    }
  };
  dfs(n);
  return total;
};
