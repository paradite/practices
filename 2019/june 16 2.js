/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
  const labelMap = {};
  for (var i = 0; i < values.length; i++) {
    value = values[i];
    label = labels[i];
    if (!labelMap[label]) {
      labelMap[label] = [value];
    } else {
      labelMap[label].push(value);
    }
  }
  let usableVals = [];
  for(let key in labelMap) {
    labelMap[key].sort(function(a, b) {
      return b - a;
    });
    labelMap[key] = labelMap[key].slice(0, use_limit);
    usableVals = [...usableVals, ...labelMap[key]];
  }
  usableVals.sort(function(a, b) {
    return b - a;
  });
  const toSum = usableVals.slice(0, num_wanted);
  let sum = 0;
  return toSum.reduce((a, b) => a+b, 0);
};

console.log(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1));
console.log(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2));
console.log(largestValsFromLabels([9,8,8,7,6], [0,0,0,1,1], 3, 1));
