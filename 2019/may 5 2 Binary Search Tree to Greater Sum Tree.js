// https://leetcode.com/contest/weekly-contest-135/problems/binary-search-tree-to-greater-sum-tree/

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
var bstToGst = function(root) {
  var bstToGstCurr = function(root) {
    if (root === null) {
      return null;
    }
    if (root.left === null && root.right === null) {
      if (currentValue === 0) {
        currentValue += root.val;
      } else {
        root.val = currentValue + root.val;
        currentValue = root.val;
      }
    } else {
      if (root.right !== null) {
        bstToGstCurr(root.right);
      }
      root.val = root.val + currentValue;
      currentValue = root.val;
      if (root.left !== null) {
        bstToGstCurr(root.left);
      }
    }
    return root;
  };

  let currentValue = 0;
  root = bstToGstCurr(root);
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const l1 = new TreeNode(1);
const l2 = new TreeNode(6);

const l3 = new TreeNode(0);
const l4 = new TreeNode(2);
const l5 = new TreeNode(5);
const l6 = new TreeNode(7);

const l7 = new TreeNode(3);
const l8 = new TreeNode(8);

const r = new TreeNode(4);

r.left = l1;
r.right = l2;

l1.left = l3;
l1.right = l4;
l2.left = l5;
l2.right = l6;

l4.right = l7;
l6.right = l8;

// console.log(r);
const tree = bstToGst(r);
console.log(tree);
console.log(tree.left);
const tree2 = bstToGst(r);
console.log(tree2);
console.log(tree2.left);
