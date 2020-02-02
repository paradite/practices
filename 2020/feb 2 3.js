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
var maxProduct = function(root) {
  const mod = Math.pow(10, 9) + 7;
  const dfsSum = n => {
    if (!n) {
      return 0;
    }
    if (!n.left && !n.right) {
      return n.val;
    }
    const left = dfsSum(n.left);
    if (n.left) {
      n.left.sum = left;
    }
    const right = dfsSum(n.right);
    if (n.right) {
      n.right.sum = right;
    }
    return left + right + n.val;
  };
  const sum = dfsSum(root);
  let ans = 0;
  const dfs = (n, cur) => {
    if (!n) {
      return;
    }
    if (cur >= sum / 2) {
      const prod = cur * (sum - cur);
      if (prod > ans) {
        ans = prod;
      }
      return;
    }
    const prod = cur * (sum - cur);
    if (prod > ans) {
      ans = prod;
    }
    cur = cur + n.val;
    dfs(n.left, cur + (n.right ? n.right.sum : 0));
    dfs(n.right, cur + (n.left ? n.left.sum : 0));
  };
  dfs(root, 0);
  return ans % mod;
};

console.log(2655711 * 2275761);
console.log(3032291 * 1899181);
