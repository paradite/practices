/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 0;
  const dfs = node => {
    if (!node) return 0;
    const resL = dfs(node.left);
    const resR = dfs(node.right);
    // console.log('diameterOfBinaryTree -> node', node);
    // console.log('diameterOfBinaryTree -> resL', resL);
    // console.log('diameterOfBinaryTree -> resR', resR);
    if (resL + resR > ans) ans = resL + resR;
    if (resL + resR === 0) return 1;
    return Math.max(resL, resR) + 1;
  };
  dfs(root);
  return ans;
};
