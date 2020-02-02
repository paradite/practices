/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  mat = mat.map((v, i) => {
    v.index = i;
    return v;
  });
  // console.log('TCL: mat', mat);
  return mat
    .sort((a, b) => {
      const diff = a.filter(v => v === 1).length - b.filter(v => v === 1).length;
      if (diff > 0) {
        return 1;
      } else if (diff < 0) {
        return -1;
      } else {
        return a.index - b.index;
      }
    })
    .map(a => a.index)
    .slice(0, k);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    3
  )
);

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    2
  )
);
