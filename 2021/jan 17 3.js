/**
 * @param {number[][]} matrix
 * @return {number}
 */
// TODO: TLE
var largestSubmatrix = function (matrix) {
  let segments = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < cols; i++) {
    let cont = false;
    let start = 0;
    for (let j = 0; j < rows; j++) {
      // console.log('largestSubmatrix -> matrix[j][i]', matrix[j][i]);
      if (matrix[j][i]) {
        if (cont) {
        } else {
          start = j;
          cont = true;
        }
      } else {
        if (cont) {
          segments.push([start, j - 1]);
          cont = false;
        } else {
        }
      }
    }
    if (cont) {
      segments.push([start, rows - 1]);
    }
  }
  // console.log('largestSubmatrix -> segments', segments);
  let max = 0;
  let perms = new Set();
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    perms.add(seg);
    for (let j = i + 1; j < segments.length; j++) {
      const seg2 = segments[j];
      const left = seg[0] < seg2[0] ? seg2[0] : seg[0];
      const right = seg[1] < seg2[1] ? seg[1] : seg2[1];
      perms.add([left, right]);
    }
  }
  perms = Array.from(perms);
  console.log('largestSubmatrix -> perms', perms.length);
  for (let i = 0; i < perms.length; i++) {
    const segment = perms[i];
    // console.log('largestSubmatrix -> segment', segment);
    const area = segment[1] - segment[0] + 1;
    let count = 0;
    for (let j = 0; j < segments.length; j++) {
      const segment2 = segments[j];
      if (segment2[0] <= segment[0] && segment2[1] >= segment[1]) {
        count++;
      }
    }
    const total = area * count;
    // console.log('largestSubmatrix -> area total', area, total);
    if (total > max) max = total;
  }
  return max;
};

console.log(
  largestSubmatrix([
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
  ])
);

// prettier-ignore
console.log(largestSubmatrix([
  [1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1],
  [1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1],
  [1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0]]));
// 40

// prettier-ignore
console.log(largestSubmatrix([[1,0,0],[1,1,1],[0,1,1]]));
// 4

// prettier-ignore
console.log(largestSubmatrix([
  [1,1,1,0,1,1,1,0],
  [1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,1,1],
  [1,0,1,0,0,0,1,1],
  [0,1,1,0,1,1,1,1],
  [1,1,0,1,1,1,0,1],
  [1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,0],
  [1,1,1,1,0,1,0,1],
  [1,0,0,1,1,1,1,1],
  [1,1,1,0,1,1,1,1],
  [1,1,1,1,1,0,1,1],
  [1,0,1,0,0,0,0,0],
  [0,0,1,1,1,0,1,1],
  [1,1,0,1,1,1,0,1]]));
// 16
