if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * Rotates the given array 90 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   2d array representing a rotated version of the input
 */
function rotate90(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);
  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);
    for (let x = 0; x < w; x++) {
      b[y][x] = a[w - 1 - x][y];
    }
  }
  return b;
}

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  let matCopy = rotate90(mat);
  for (let i = 0; i < 4; i++) {
    if (_.isEqual(matCopy, target)) {
      return true;
    }
    matCopy = rotate90(matCopy);
  }
  return false;
};
