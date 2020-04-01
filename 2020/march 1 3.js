/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  const findHead = (cur, n) => {
    if (!cur) return;
    if (cur.val === n.val) {
      return cur;
    }
    return findHead(cur.left) | findHead(cur.right);
  };
  let foundH = findHead(root, head);
  if (!foundH) {
    return false;
  }
  // console.log(foundH);
  while (head.next) {
    console.log('TCL: foundH', foundH);
    const cur = head.next;
    console.log('TCL: cur', cur);
    if (foundH.left && foundH.left.val === cur.val) {
      foundH = foundH.left;
    } else if (foundH.right && foundH.right.val === cur.val) {
      foundH = foundH.right;
    }
    return false;
  }

  return true;
};

console.log(isSubPath([4, 2, 8]));
