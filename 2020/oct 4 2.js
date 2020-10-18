/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const bfs = (nodeList, l) => {
    if (nodeList.length === 0) {
      return true;
    }
    let cur = null;
    let newList = [];
    for (let i = 0; i < nodeList.length; i++) {
      const node = nodeList[i];
      if (l % 2 === 0) {
        if (
          (cur === null && node.val % 2 === 1) ||
          (node.val > cur && node.val % 2 === 1)
        ) {
          cur = node.val;
          if (node.left) {
            newList.push(node.left);
          }
          if (node.right) {
            newList.push(node.right);
          }
        } else {
          return false;
        }
      } else {
        if (
          (cur === null && node.val % 2 === 0) ||
          (node.val < cur && node.val % 2 === 0)
        ) {
          cur = node.val;
          if (node.left) {
            newList.push(node.left);
          }
          if (node.right) {
            newList.push(node.right);
          }
        } else {
          return false;
        }
      }
    }
    return bfs(newList, l + 1);
  };
  return bfs([root], 0);
};
