/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let i = 0;
  let n = head;
  let prev, next;
  let arr = [];
  while (n) {
    next = n.next;
    if (next && prev) {
      // console.log('TCL ~ n.val', n.val);
      // console.log('TCL ~ next.val', next.val);
      // console.log('TCL ~ prev.val', prev.val);
      if (
        (n.val > next.val && n.val > prev.val) ||
        (n.val < next.val && n.val < prev.val)
      ) {
        arr.push(i);
      }
    }
    i++;
    prev = n;
    n = n.next;
  }
  if (arr.length < 2) return [-1, -1];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    min = Math.min(min, arr[i + 1] - element);
  }
  const max = arr[arr.length - 1] - arr[0];
  return [min, max];
};
