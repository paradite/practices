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
var balanceBST = function(root) {
  let newRoot = root;
  const swapPC = (newC, parent, side) => {
    if (parent) {
      parent[side] = newC;
    } else {
      newC.parent = null;
      newRoot = newC;
    }
  };
  const LL = node => {
    const newP = node.right;
    const GP = node.parent;
    let side = 'right';
    if (GP && GP.right) {
      side = node === GP.right ? 'right' : 'left';
    }
    swapPC(newP, GP, side);
    newP.left = node;
    node.right = null;
    return newP;
  };
  const RR = node => {
    const newP = node.left;
    const GP = node.parent;
    let side = 'right';
    if (GP && GP.right) {
      side = node === GP.right ? 'right' : 'left';
    }
    swapPC(newP, GP, side);
    newP.right = node;
    node.left = null;
  };
  const LR = node => {
    LL(node.left);
    return RR(node);
  };
  const RL = node => {
    RR(node.right);
    return LL(node);
  };
  const balance = node => {
    console.log('TCL: balance');
    console.log('TCL: node', node);
    if (f(node) > 1) {
      if (f(node.left) > 0) {
        RR(node);
      } else if (f(node.left) < 0) {
        LR(node);
      }
    } else if (f(node) < -1) {
      if (f(node.right) < 0) {
        LL(node);
      } else if (f(node.right) > 0) {
        RL(node);
      }
    }
  };
  const h = node => {
    return Math.max(hl(node), hr(node));
  };
  const hl = node => {
    return node.left ? h(node.left) + 1 : 0;
  };
  const hr = node => {
    return node.right ? h(node.right) + 1 : 0;
  };
  const f = node => {
    return hl(node) - hr(node);
  };
  const balanceUp = node => {
    console.log('TCL: balanceUp');
    console.log('TCL: node', node);
    let cur = node;
    while (cur) {
      balance(cur);
      cur = cur.parent;
    }
  };

  const setParent = (node, parent) => {
    if (!node) return;
    node.parent = parent;
    setParent(node.left, node);
    setParent(node.right, node);
  };
  setParent(root, null);
  const trav = node => {
    if (!node) return;
    if (!node.left && node.right) {
      balanceUp(node);
    } else {
      trav(node.left);
      trav(node.right);
    }
  };
  trav(root);
  return newRoot;
};
