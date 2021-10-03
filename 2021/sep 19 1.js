/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let ans = 0;
  for (let i = 0; i < operations.length; i++) {
    const element = operations[i];
    if (element === '++X' || element === 'X++') ans++;
    if (element === '--X' || element === 'X--') ans--;
  }
  return ans;
};
