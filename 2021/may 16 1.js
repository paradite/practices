/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  const recurse = (curr, index) => {
    if (index >= nums.length) return;
    let include = curr ? curr ^ nums[index] : nums[index];
    sum += include;
    recurse(curr, index + 1);
    recurse(include, index + 1);
  };
  recurse(0, 0);
  return sum;
};

console.log(subsetXORSum([1, 3]));
