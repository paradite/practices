/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let cur = head;
  let count = 1;
  let first = k;
  let prev = null;
  let last;
  while (cur) {
    cur.prev = prev;
    cur.count = count;
    count++;
    prev = cur;
    if (!cur.next) last = cur;
    cur = cur.next;
  }
  head.prev = last;
  // console.log('swapNodes -> head', head);
  count--;
  // console.log('swapNodes -> count', count);
  if (count === 1) {
    return head;
  }
  let second = count + 1 - k;
  if (second < first) {
    let temp = second;
    second = first;
    first = temp;
  }
  cur = head;
  let firstNode;
  let firstNodeParent;
  let secondNode;
  let secondNodeParent;
  while (cur) {
    if (cur.count === first) {
      firstNode = cur;
      firstNodeParent = cur.prev;
    }
    if (cur.count === second) {
      secondNode = cur;
      secondNodeParent = cur.prev;
    }
    cur = cur.next;
  }
  let secondNodeLast = true;
  if (secondNode.next) {
    secondNodeLast = false;
  }
  // console.log('swapNodes -> firstNode', firstNode);
  // console.log('swapNodes -> firstNodeParent', firstNodeParent);
  if (firstNodeParent.next !== secondNode) {
    firstNodeParent.next = secondNode;
  }
  if (secondNodeParent.next !== firstNode) {
    secondNodeParent.next = firstNode;
  }
  let temp = firstNode.next;
  if (secondNodeLast) {
    firstNode.next = null;
  } else {
    firstNode.next = secondNode.next;
  }
  secondNode.next = temp;
  if (firstNode === head) {
    return secondNode;
  }
  return head;
};
