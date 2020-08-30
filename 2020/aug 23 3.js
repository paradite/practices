/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  let sets = [];
  let ans = -1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let startIndex = null;
    let endIndex = null;
    for (let j = sets.length - 1; j >= 0; j--) {
      // console.log('findLatestStep -> sets', sets);
      const [start, end] = sets[j];
      if (element === start - 1) {
        startIndex = j;
      } else if (element === end + 1) {
        endIndex = j;
      }
    }
    if (startIndex !== null && endIndex !== null) {
      sets[endIndex][1] = sets[startIndex][1];
      if (sets[endIndex][1] - sets[endIndex][0] + 1 === m) {
        ans = i;
      }
      sets.splice(startIndex, 1);
    } else if (startIndex !== null) {
      sets[startIndex][0] = element;
      if (sets[startIndex][1] - sets[startIndex][0] + 1 === m) {
        ans = i;
      }
    } else if (endIndex !== null) {
      sets[endIndex][1] = element;
      if (sets[endIndex][1] - sets[endIndex][0] + 1 === m) {
        ans = i;
      }
    } else {
      sets.push([element, element]);
      if (1 === m) {
        ans = i;
      }
    }
    for (let j = sets.length - 1; j >= 0; j--) {
      const [start, end] = sets[j];
      // console.log('findLatestStep -> sets', sets);
      // console.log('findLatestStep -> [start, end]', [start, end]);
      if (end - start + 1 === m) {
        // console.log('findLatestStep -> sets', sets);
        ans = i;
      }
    }
    // console.log('findLatestStep -> sets', sets);
  }
  if (ans === -1) return -1;
  return ans + 1;
};

console.log(findLatestStep([3, 5, 1, 2, 4], 1));
