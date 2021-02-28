/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    const [type, color, name] = items[i];
    if (ruleKey === 'color' && ruleValue === color) {
      ans++;
    } else if (ruleKey === 'type' && ruleValue === type) {
      ans++;
    } else if (ruleKey === 'name' && ruleValue === name) {
      ans++;
    }
  }
  return ans;
};
