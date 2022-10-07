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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, curr) => {
    if (node) {
      if (node.val + curr === targetSum && !node.left && !node.right)
        return true;
      return (
        dfs(node.left, curr + node.val) || dfs(node.right, curr + node.val)
      );
    } else {
      return false;
    }
  };
  return dfs(root, 0);
};
