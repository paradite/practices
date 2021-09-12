/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const max = Math.max(...nums);
  // nums.sort((a, b) => a - b);
  // console.log('TCL ~ nums', nums);
  const dfs = (currIndex, currSum, currCount) => {
    if (currCount > 4) return 0;
    if (currIndex >= nums.length) return 0;

    if (nums[currIndex] === currSum && currCount === 3) {
      // console.log(
      //   'TCL ~ currIndex currN currSum currCount arr',
      //   currIndex,
      //   nums[currIndex],
      //   currSum,
      //   currCount,
      //   arr
      // );
      return dfs(currIndex + 1, currSum, currCount) + 1;
    }
    if (currSum > max) {
      return 0;
    }
    // console.log(
    //   'TCL ~ currIndex currN currSum currCount',
    //   currIndex,
    //   nums[currIndex],
    //   currSum,
    //   currCount
    // );
    return (
      dfs(currIndex + 1, currSum, currCount) +
      dfs(currIndex + 1, currSum + nums[currIndex], currCount + 1)
    );
  };
  return dfs(1, 0, 0) + dfs(1, nums[0], 1);
};

console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets([3, 3, 6, 4, 5]));
console.log(countQuadruplets([1, 1, 1, 3, 5]));
console.log(countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8])); // 1
