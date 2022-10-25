/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let missing = 0;
  let duplicate = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n !== i + 1 && missing === 0) {
      missing = i + 1;
    }
    if (n === missing) {
      missing += 1;
    }
    if (i >= 1 && n === nums[i - 1]) {
      duplicate = n;
    }
  }
  return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([2, 3, 3, 4, 6, 5]));
console.log(findErrorNums([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]));
