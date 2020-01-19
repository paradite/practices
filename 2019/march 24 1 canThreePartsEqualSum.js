// https://leetcode.com/contest/weekly-contest-129/problems/partition-array-into-three-parts-with-equal-sum/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sumLeft = [];
  let sumRight = [];

  let cur = 0;

  for (var i = 0; i < A.length; i++) {
    cur += A[i];
    sumLeft.push(cur);
  }

  cur = 0;

  for (var i = A.length - 1; i >= 0; i--) {
    cur += A[i];
    sumRight.unshift(cur);
  }

  const sum = sumRight[0];

  // console.log(sumLeft);
  // console.log(sumRight);

  for (var i = 0; i < A.length - 2; i++) {
    const left = sumLeft[i];
    for (var j = i + 2; j < A.length; j++) {
      const right = sumRight[j];
      if (left === right) {
        const mid = sum - left - right;
        if (left === mid) {
          return true;
        }
      }
    }
  }

  return false;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
