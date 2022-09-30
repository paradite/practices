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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];
  const dfs = (node, curr, currArr, res) => {
    if (!node) return;
    currArr.push(node.val);
    const newCurr = curr + node.val;
    if (newCurr === targetSum && !node.left && !node.right) {
      res.push([...currArr]);
    }
    dfs(node.left, newCurr, currArr, res);
    dfs(node.right, newCurr, currArr, res);
    currArr.pop();
  };
  dfs(root, 0, [], res);
  return res;
};
