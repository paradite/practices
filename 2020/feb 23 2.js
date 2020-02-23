/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  // map of parent
  const map = {};
  for (let i = 0; i < n; i++) {
    // console.log('TCL: map', map);
    const left = leftChild[i];
    const right = rightChild[i];
    if (map[i] === left || map[i] === right) {
      return false;
    }
    if (map[left] || map[right]) {
      return false;
    }
    if (left !== -1) {
      map[left] = i;
    }
    if (right !== -1) {
      map[right] = i;
    }
  }
  console.log('TCL: map', map);
  const m = Object.entries(map).length;
  // console.log('TCL: m', m);
  return m === n - 1;
};

console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1]));
console.log(validateBinaryTreeNodes(2, [1, 0], [-1, -1]));
console.log(validateBinaryTreeNodes(6, [1, -1, -1, 4, -1, -1], [2, -1, -1, 5, -1, -1]));
