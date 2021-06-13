/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let curr = nums[0];
  let currIndex = 0;
  let count = [0];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // console.log('TCL ~ element', element);
    if (element === curr) {
      count[currIndex] = count[currIndex] + 1;
    } else {
      curr = element;
      currIndex++;
      count.push(1);
    }
  }
  let ans = 0;
  // console.log('TCL ~ count', count);
  for (let i = 0; i < count.length; i++) {
    const element = count[i];
    ans += element * i;
  }
  return ans;
};

console.log(reductionOperations([5, 1, 3]));
