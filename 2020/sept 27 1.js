/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let ans = 0;
  for (let i = 0; i < logs.length; i++) {
    const element = logs[i];
    if (element === '../') {
      ans--;
      if (ans < 0) {
        ans = 0;
      }
    } else if (element !== './') {
      ans++;
    }
  }
  return ans;
};
