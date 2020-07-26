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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  const leaves = [];
  let ans = 0;
  root.path = '';
  // build prefix string for each leave representing the directions taken from root
  // "00" means left, left
  // "10" means right, left
  const dfs = (node) => {
    if (!node.left && !node.right) {
      leaves.push(node.path);
    } else {
      if (node.left) {
        node.left.path = node.path + '0';
        dfs(node.left);
      }
      if (node.right) {
        node.right.path = node.path + '1';
        dfs(node.right);
      }
    }
  };
  dfs(root);
  for (let i = 0; i < leaves.length; i++) {
    let l1 = leaves[i];
    for (let j = i + 1; j < leaves.length; j++) {
      // calculate distance between each pair of leaves using prefix string
      // once diverged, the distance increase by 2 for each level down the tree
      let l2 = leaves[j];
      let dist = 0;
      let long = l1;
      let short = l2;
      if (l2.length >= l1.length) {
        long = l2;
        short = l1;
      }
      let diverge = false;
      for (let k = 0; k < short.length; k++) {
        const e1 = long[k];
        const e2 = short[k];
        if (diverge || e1 !== e2) {
          dist = dist + 2;
          diverge = true;
        }
      }
      dist = dist + long.length - short.length;
      if (dist <= distance) {
        ans++;
      }
    }
  }
  return ans;
};
