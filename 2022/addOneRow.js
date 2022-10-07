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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    const newRoot = {
      val,
      left: root,
      right: null,
    };
    return newRoot;
  }
  const dfs = (node, currDepth) => {
    if (!node) return;
    if (currDepth === depth - 1) {
      const newLeft = {
        val,
        left: node.left,
        right: null,
      };
      const newRight = {
        val,
        left: null,
        right: node.right,
      };
      node.left = newLeft;
      node.right = newRight;
    } else {
      dfs(node.left, currDepth + 1);
      dfs(node.right, currDepth + 1);
    }
  };
  dfs(root, 1);
  return root;
};
