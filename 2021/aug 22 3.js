/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function (mat, target) {
  let possible = new Set();

  for (let i = 0; i < mat[0].length; i++) {
    const element = mat[0][i];
    possible.add(element);
  }
  // console.log('TCL ~ possible', possible);

  for (let i = 1; i < mat.length; i++) {
    const row = mat[i];
    let newPossible = new Set();
    for (let item of possible) {
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        // console.log('TCL ~ item', item);
        // console.log('TCL ~ element', element);
        // console.log('TCL ~ item + element', item + element);
        newPossible.add(item + element);
      }
    }
    // console.log('TCL ~ newPossible', newPossible);
    possible = newPossible;
    // console.log('TCL ~ possible', possible);
  }
  let min = Infinity;
  for (let item of possible) {
    // console.log('TCL ~ item', item);
    // console.log('TCL ~ Math.abs(item - target)', Math.abs(item - target));
    if (Math.abs(item - target) < min) {
      min = Math.abs(item - target);
    }
    // console.log('TCL ~ min', min);
  }
  return min;
};

console.log(
  minimizeTheDifference(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    13
  )
);
console.log(minimizeTheDifference([[1], [2], [3]], 100));
console.log(minimizeTheDifference([[1, 2, 9, 8, 7]], 6));
console.log(
  minimizeTheDifference(
    [
      [10, 3, 7, 7, 9, 6, 9, 8, 9, 5],
      [1, 1, 6, 8, 6, 7, 7, 9, 3, 9],
      [3, 4, 4, 1, 3, 6, 3, 3, 9, 9],
      [6, 9, 9, 3, 8, 7, 9, 6, 10, 6],
    ],
    5
  )
); // 3

console.log(
  minimizeTheDifference(
    [
      [4, 1, 2, 2, 2, 1],
      [1, 1, 6, 5, 3, 3],
      [3, 9, 1, 7, 10, 1],
      [4, 3, 1, 1, 6, 10],
      [2, 5, 6, 8, 1, 5],
      [8, 9, 10, 1, 5, 7],
    ],
    23
  )
); // 3
