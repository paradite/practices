/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function (arr1, arr2) {
  let ans = arr1[0] & arr2[0];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const element2 = arr2[j];
      ans = ans ^ (element & element2);
    }
  }
  return ans;
};
