// https://leetcode.com/contest/weekly-contest-144/problems/delete-nodes-and-return-forest/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {

  let ans = [];
  let deleteMap = {};
  for (var i = 0; i < to_delete.length; i++) {
    deleteMap[to_delete[i]] = 1;
  }

  const delIter = function(root) {
    // console.log(root.left);
    if (root.left) {
      delIter(root.left);
      if (deleteMap[root.left.val]) {
        addSub(root.left);
        root.left = null;
      }
    }
    // console.log(root.right);
    if (root.right) {
      delIter(root.right);
      if (deleteMap[root.right.val]) {
        addSub(root.right);
        root.right = null;
      }
    }
  }
  const addSub = function(root) {
    if (root.left && !deleteMap[root.left.val]) {
      ans.push(root.left);
    }
    if (root.right && !deleteMap[root.right.val]) {
      ans.push(root.right);
    }
  }
  if (root) {
    delIter(root);
  }

  if (root) {
    if (!deleteMap[root.val]) {
      ans.push(root);
    } else {
      addSub(root);
    }
  }
  console.log(deleteMap);

  return ans;
};


[1,2,3,null,null,null,4]
[2,1]
