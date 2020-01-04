/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i] + '';
    if (element.length % 2 === 0) {
      ans += 1;
    }
  }
  return ans;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
console.log(findNumbers([522255, 9021, 4822, 1771]));
