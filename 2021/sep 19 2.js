/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  let max = nums[0];
  let min = nums[nums.length - 1];
  let maxArr = [max];
  let minArr = [min];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    max = Math.max(max, element);
    maxArr.push(max);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    const element = nums[i];
    min = Math.min(min, element);
    minArr.push(min);
  }
  minArr.reverse();
  // console.log('TCL ~ maxArr', maxArr);
  // console.log('TCL ~ minArr', minArr);
  let ans = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    const element = nums[i];
    if (element > maxArr[i - 1] && element < minArr[i + 1]) {
      // console.log('TCL ~ element', element);
      // console.log('TCL ~ maxArr[i - 1]', maxArr[i - 1]);
      // console.log('TCL ~ minArr[i + 1]', minArr[i + 1]);
      ans = ans + 2;
    } else if (element > nums[i - 1] && element < nums[i + 1]) ans = ans + 1;
  }
  return ans;
};

console.log(sumOfBeauties([1, 2, 3]));
console.log(sumOfBeauties([6, 8, 3, 7, 8, 9, 4, 8])); // 2
