const _ = require('lodash');
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const element = accounts[i];
    const sum = _.sum(element);
    if (sum > max) max = sum;
  }
  return max;
};
