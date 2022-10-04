/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let prev = s[0];
  let cur = [cost[0]];
  let ans = 0;
  for (let i = 1; i < s.length + 1; i++) {
    let c = s[i];
    // console.log('minCost -> c', c);
    // console.log('minCost -> prev', prev);
    if (c === prev) {
      cur.push(cost[i]);
    } else {
      if (cur.length > 1) {
        cur.sort((a, b) => a - b);
        // console.log('minCost -> cur', cur);
        for (let i = 0; i < cur.length - 1; i++) {
          ans = ans + cur[i];
        }
      }

      prev = c;
      cur = [cost[i]];
    }
  }
  return ans;
};
