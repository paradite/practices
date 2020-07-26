/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let ans = [];
  for (let i = 0; i < indices.length; i++) {
    const element = indices[i];
    ans[element] = s[i];
  }
  return ans.join('');
};
