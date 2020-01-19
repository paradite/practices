/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  // console.log(root);
  const nodes = [root];
  while (nodes.length > 0) {
    const node = nodes.pop();
    if (node.val === -1) {
      node.val = 0;
    }
    if (node.left !== null) {
      node.left.val = node.val * 2 + 1;
      nodes.push(node.left);
    }
    if (node.right !== null) {
      node.right.val = node.val * 2 + 2;
      nodes.push(node.right);
    }
  }
  this.tree = root;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  const path = [];
  let current = this.tree;
  // console.log('TCL: current', current);
  while (target !== 0) {
    path.unshift(target);
    if (target % 2 == 0) {
      target = (target - 2) / 2;
    } else {
      target = (target - 1) / 2;
    }
  }
  path.unshift(target);
  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    if (i === path.length - 1 && current.val === element) {
      return true;
    }
    if (path[i + 1] % 2 == 0) {
      if (current.right === null) {
        return false;
      } else {
        current = current.right;
      }
    } else {
      if (current.left === null) {
        return false;
      } else {
        current = current.left;
      }
    }
  }
  return true;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(-1);
const right = new TreeNode(-1);
root.right = right;

const obj = new FindElements(root);
console.log(obj.find(1));
console.log(obj.find(2));

// ["FindElements","find","find","find"]
// [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
