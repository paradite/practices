/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // find closest one and index
  let minDist = Infinity;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const abs = Math.abs(x - element);
    if (abs < minDist) {
      minDist = abs;
      minIndex = i;
    }
  }
  const res = [arr[minIndex]];

  let pIndex = minIndex - 1;
  let pDist = pIndex >= 0 ? Math.abs(arr[pIndex] - x) : Infinity;

  let nIndex = minIndex + 1;
  let nDist = nIndex < arr.length ? Math.abs(arr[nIndex] - x) : Infinity;
  while (res.length < k) {
    if (pDist <= nDist) {
      res.push(arr[pIndex]);
      pIndex--;
      pDist = pIndex >= 0 ? Math.abs(arr[pIndex] - x) : Infinity;
    } else {
      res.push(arr[nIndex]);
      nIndex++;
      nDist = nIndex < arr.length ? Math.abs(arr[nIndex] - x) : Infinity;
    }
  }
  return res.sort((a, b) => a - b);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, 4));
// console.log(findClosestElements([1, 2, 3, 4, 5], 2, 4));
// console.log(findClosestElements([1, 2, 3, 4, 5], 5, 100));
