/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  if (!root) {
    return null;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  if (root.val === target) {
    if (root.left === null && root.right === null) {
      return null;
    }
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(removeLeafNodes(new TreeNode(1), 2));
console.log(removeLeafNodes(new TreeNode(2), 2));
