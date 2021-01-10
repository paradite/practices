/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let ans = 0;
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < boxTypes.length; i++) {
    let [count, size] = boxTypes[i];
    if (count > truckSize) count = truckSize;
    ans = ans + count * size;
    truckSize = truckSize - count;
    if (truckSize === 0) break;
  }
  return ans;
};

// prettier-ignore
console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
// prettier-ignore
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
