/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let stack = [];
  stack.push(head.val);
  // console.log('TCL: head', head);
  while (head.next) {
    head = head.next;
    stack.push(head.val);
  }
  let ans = 0;
  let exp = 0;
  while (stack.length > 0) {
    // console.log('TCL: stack', stack);
    let n = stack.pop();
    // console.log('TCL: n', n);
    ans += n * Math.pow(2, exp);
    // console.log('TCL: ans', ans);
    exp++;
  }
  return ans;
};

console.log(getDecimalValue([1, 0, 1]));
