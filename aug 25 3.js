/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
  let removed = true;
  while (removed) {
    let start = head;
    let parent = null;
    removed = false;
    while (start) {
      let current = start;
      let sum = current.val;
      while (current.next) {
        sum = sum + current.next;
        if (sum === 0) {
          if (parent === null) {
            head = start;
          } else {
            parent.next = current.next.next;
            parent = current.next.next;
            if (current.next.next.next) {
              current = current.next.next.next;
            }
          }
        }
        current = current.next;
      }
      parent = start;
      start = start.next;
    }
  }
  return head;
};

console.log();
