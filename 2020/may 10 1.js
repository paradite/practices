/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const ans = [];
  for (let i = 1, j = 0; i <= n; ) {
    if (j === target.length) {
      break;
    }
    // console.log('buildArray -> i', i);
    // console.log('buildArray -> j', j);
    // console.log('buildArray -> target[j]', target[j]);
    if (target[j] !== i) {
      ans.push('Push');
      ans.push('Pop');
      i++;
    } else {
      ans.push('Push');
      i++;
      j++;
    }
  }
  return ans;
};

console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));
console.log(buildArray([1, 2], 4));
console.log(buildArray([2, 3, 4], 4));
