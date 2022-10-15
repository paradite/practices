/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  // console.log('TCL ~ nums', nums);
  for (let i = 0; i < nums.length - 2; i++) {
    const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];
    if (a + b > c && a + c > b && b + c > a) {
      return a + b + c;
    }
  }
  return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1]));
console.log(largestPerimeter([3, 2, 3, 4])); // 10
console.log(largestPerimeter([3, 50, 50, 100])); // 10
console.log(largestPerimeter([3, 1, 40, 50, 100])); // 10
console.log(largestPerimeter([3, 1, 45, 50, 100])); // 10
console.log(largestPerimeter([3, 10, 45, 50, 100])); // 10
console.log(largestPerimeter([3, 10, 15, 45, 50, 100])); // 10
