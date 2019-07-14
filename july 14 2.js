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
  let next = [];
  while(current.length) {
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
    if (next.length) {
      current = next;
      next = [];
    } else {
      next = current;
      current = [];
    }
  }
  // console.log(next);
  let parent = next[0].parent;
  if (!parent) {
    return next[0];
  }
  while(next.length > 1) {
    console.log('start');
    console.log(next);
    let sat = true;
    for (var i = 0; i < next.length; i++) {
      // console.log('next[i].parent');
      console.log('check parent');
      console.log(next[i].parent);
      console.log(parent);
      if (next[i].parent !== parent) {
        sat = false;
        console.log('goto nexttttt');
        // console.log(next);
        let newNext = [];
        for (var j = 0; j < next.length; j++) {
          // console.log(next[j]);
          newParent = next[j].parent;
          // console.log(newNext);
          // console.log(newParent);
          // console.log(newNext.includes(newParent));
          if (!newNext.includes(newParent)) {
            newNext.push(newParent);
          }
        }
        next = newNext;
        console.log('next');
        console.log(next);
        break;
      }
    }
    if (sat) {
      return next[0].parent;
    }
  }
  return next[0];
};
