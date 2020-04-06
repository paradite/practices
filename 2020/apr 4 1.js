/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const map = {};
  for (let i = 1; i <= n; i++) {
    const sum = (i + '').split('').reduce((pre, cur) => {
      return pre + Number(cur);
    }, 0);
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  let ans = 0;
  let max = 0;
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      if (element > max) {
        ans = 1;
        max = element;
      } else if (element === max) {
        ans++;
      }
    }
  }
  return ans;
};

console.log(countLargestGroup(13));
console.log(countLargestGroup(2));
console.log(countLargestGroup(15));
console.log(countLargestGroup(24));
