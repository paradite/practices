/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  let currSum = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    currSum.push([index, element]);
  }
  let minTracker = [];
  for (let index = 0; index < currSum.length; index++) {
    const element = currSum[index];
    minTracker[index] = element[1];
  }
  console.log(minTracker);

  let max = Math.max(...arr);
  for (let currCount = 2; currCount <= arr.length; currCount++) {
    let nextSum = [];
    // console.log("TCL: currCount", currCount)
    for (let i = 0; i < arr.length - currCount + 1; i++) {
      // console.log(currSum);
      const [index, element] = currSum[i];
      let toAddIndex = currCount - 1 + index;
      // console.log("TCL: toAddIndex", toAddIndex)
      if (arr[toAddIndex] < minTracker[index]) {
        minTracker[index] = arr[toAddIndex];
      }
      // console.log("TCL: index", index)
      // console.log("TCL: toAddIndex", toAddIndex)
      // console.log("TCL: arr[toAddIndex]", arr[toAddIndex])
      // console.log("TCL: currSum[index]", currSum[index])
      nextSum.push([index, element + arr[toAddIndex]]);
      // console.log("TCL: currSum[index]", currSum[index])
      let maxSum = minTracker[index] < 0 ? element + arr[toAddIndex] - minTracker[index] : element + arr[toAddIndex];
      if (maxSum > max) {
        max = maxSum;
      }
    }
    currSum = nextSum;
  }

  return max;
};

console.log(maximumSum([1, -2, 0, 3]));
console.log(maximumSum([1, -2, -2, 3]));
console.log(maximumSum([-1, -1, -1, -1]));
