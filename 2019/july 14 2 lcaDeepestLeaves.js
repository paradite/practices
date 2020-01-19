/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  let current = [root];
  let level = 0;
  let last = [];
  // go down
  while(current.length) {
    let next = [];
    for (var i = 0; i < current.length; i++) {
      if (current[i].left) {
        current[i].left.parent = current[i];
        next.push(current[i].left);
      }
      if (current[i].right) {
        current[i].right.parent = current[i];
        next.push(current[i].right);
      }
    }
    last = current;
    current = next;
  }
  // edge case where no parent
  let parent = last[0].parent;
  if (!parent) {
    return last[0];
  }
  // go up
  while(last.length > 1) {
    let next = [];
    for (var i = 0; i < last.length; i++) {
      newParent = last[i].parent;
      if (!next.includes(newParent)) {
        next.push(newParent);
      }
    }
    last = next;
  }
  return last[0];
};
