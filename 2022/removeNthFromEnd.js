/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function getLength(node) {
    length = 1;
    while (node.next) {
      node = node.next;
      length++;
    }
    return length;
  }
  let index = getLength(head) - n - 1;
  let node = head;
  if (index < 0) return head.next;
  while (index > 0) {
    node = node.next;
    index--;
  }
  if (node.next) {
    node.next = node.next.next;
  }
  return head;
};
