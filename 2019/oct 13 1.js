/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let l = 0;
  let r = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === 'L') {
      l++;
    } else {
      r++;
    }
    if (l === r) {
      ans++;
      l = 0;
      r = 0;
    }
  }
  return ans;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLLLLRRRLR'));
console.log(balancedStringSplit('LLLLRRRR'));
