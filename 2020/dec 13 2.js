/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    while (Number(element) > count) {
      count++;
    }
  }
  return count;
};
