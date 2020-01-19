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
var maxLevelSum = function(root) {
  let nodes = [root];
  let level = 1;
  let max = root.val;
  let ans = 1;
  let nextNodes = [];
  let currentLevelAns = 0;
  while (nodes.length > 0) {
    node = nodes.pop();
    // console.log(node);

    currentLevelAns += node.val;
    if (node.left) {
      nextNodes.push(node.left);
    }
    if (node.right) {
      nextNodes.push(node.right);
    }
    if (nodes.length === 0) {
      console.log('TCL: level', level);
      console.log('TCL: currentLevelAns', currentLevelAns);
      console.log('TCL: max', max);
      if (currentLevelAns > max) {
        ans = level;
        max = currentLevelAns;
      }
      level++;
      currentLevelAns = 0;
      nodes = nextNodes;
      nextNodes = [];
    }
  }
  return ans;
};
