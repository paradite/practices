/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  const map = {};
  let count = 0;
  let node = head;
  if (!head.next) {
    return null;
  }
  while (node.next) {
    map[count] = node;
    node = node.next;
    count++;
  }
  map[count] = node;
  const total = count + 1;
  const mid = Math.floor(total / 2);
  map[mid - 1].next = map[mid + 1] ? map[mid + 1] : null;

  return head;
};
