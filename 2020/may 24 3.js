// const _ = require('lodash');

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
 * @return {number}
 */
var pseudoPalindromicPaths = function(root) {
  let ans = 0;
  let acc = [];
  let singleCount = 0;
  const dfs = cur => {
    if (!cur) {
      return;
    }
    const oldValue = acc[cur.val];
    if (acc[cur.val]) {
      acc[cur.val] = acc[cur.val] + 1;
    } else {
      acc[cur.val] = 1;
    }
    if (acc[cur.val] % 2 === 0) {
      singleCount--;
    } else {
      singleCount++;
    }
    if (!cur.left && !cur.right) {
      if (singleCount <= 1) {
        ans++;
      }
    } else {
      if (cur.left) {
        dfs(cur.left);
      }
      if (cur.right) {
        dfs(cur.right);
      }
    }
    acc[cur.val] = oldValue;
    if (acc[cur.val]) {
      if (acc[cur.val] % 2 === 0) {
        singleCount--;
      } else {
        singleCount++;
      }
    } else {
      singleCount--;
    }
  };
  dfs(root);
  return ans;
};
