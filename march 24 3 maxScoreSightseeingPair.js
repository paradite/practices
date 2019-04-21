// https://leetcode.com/contest/weekly-contest-129/problems/best-sightseeing-pair/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let realValueRight = [0];
  for (var i = 1; i < A.length; i++) {
    realValueRight[i] = A[i] - i;
  }
  let maxRight = realValueRight[realValueRight.length - 1];
  let maxRightIndex = realValueRight.length - 1;
  let bestIndexStartingFrom = [maxRightIndex];
  for (var i = realValueRight.length - 2; i >= 0; i--) {
    if (realValueRight[i] > maxRight) {
      maxRight = realValueRight[i];
      maxRightIndex = i;
    }
    bestIndexStartingFrom.unshift(maxRightIndex);
  }
  // console.log(realValueRight);
  // console.log(bestIndexStartingFrom);
  let maxPair = 0;
  for (var i = 0; i < A.length - 1; i++) {
    const value = A[i] + A[bestIndexStartingFrom[i + 1]] + i - bestIndexStartingFrom[i + 1];
    if (value > maxPair) {
      // console.log(i, A[i], value);
      maxPair = value;
    }
  }
  return maxPair;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
