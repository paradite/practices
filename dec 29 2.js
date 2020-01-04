/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const traverse = (node, arr) => {
    if (!node) {
      return;
    }
    if (node.left) {
      traverse(node.left, arr);
    }
    arr.push(node.val);
    if (node.right) {
      traverse(node.right, arr);
    }
  };
  const arr1 = [];
  const arr2 = [];
  traverse(root1, arr1);
  traverse(root2, arr2);
  // console.log('TCL: arr1', arr1);
  // console.log('TCL: arr2', arr2);
  const ans = [];
  while (arr1.length > 0 || arr2.length > 0) {
    const n1 = arr1.length > 0 ? arr1[0] : Infinity;
    // console.log('TCL: n1', n1);
    const n2 = arr2.length > 0 ? arr2[0] : Infinity;
    // console.log('TCL: n2', n2);
    if (n1 < n2) {
      ans.push(arr1.shift());
    } else {
      ans.push(arr2.shift());
    }
  }
  return ans;
};
