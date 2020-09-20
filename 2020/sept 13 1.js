/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let ans = 0;
  let rmap = {};
  let cmap = {};
  let rc = mat.length;
  let cc = mat[0].length;
  for (let i = 0; i < rc; i++) {
    for (let j = 0; j < cc; j++) {
      if (mat[i][j] === 1) {
        rmap[i] = rmap[i] ? rmap[i] + 1 : 1;
        cmap[j] = cmap[j] ? cmap[j] + 1 : 1;
      }
    }
  }
  for (let i = 0; i < rc; i++) {
    for (let j = 0; j < cc; j++) {
      if (mat[i][j] === 1) {
        if (rmap[i] === 1 && cmap[j] === 1) {
          ans++;
        }
      }
    }
  }
  return ans;
};
