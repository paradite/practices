/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  const parentMap = {};
  for (let i = 0; i < n; i++) {
    const left = leftChild[i];
    const right = rightChild[i];
    // self loop
    if (i === left || i === right) return false;
    // loop
    if (parentMap[i] === left || parentMap[i] === right) return false;
    // not tree
    if (parentMap[left] || parentMap[right]) return false;
    if (left !== -1) {
      parentMap[left] = i;
    }
    if (right !== -1) {
      parentMap[right] = i;
    }
  }
  const m = Object.entries(parentMap).length;
  // one connected tree
  return m === n - 1;
};

console.log(validateBinaryTreeNodes(3, [2, 1, -1], [-1, -1, -1]));
console.log(validateBinaryTreeNodes(3, [1, 0, -1], [-1, -1, -1]));
console.log(validateBinaryTreeNodes(4, [1, -1, -1, -1], [2, -1, -1, -1]));
console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [-1, -1, -1, 2]));
console.log(validateBinaryTreeNodes(3, [2, 0, -1], [-1, -1, -1]));
// console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
// console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1]));
// console.log(validateBinaryTreeNodes(2, [1, 0], [-1, -1]));
// console.log(validateBinaryTreeNodes(6, [1, -1, -1, 4, -1, -1], [2, -1, -1, 5, -1, -1]));
