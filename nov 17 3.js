/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  let sum = 0;
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    sum += element;
  }
  if (sum % 3 === 0) {
    return sum;
  }
  console.log('TCL: sum', sum);
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const newSum = sum - element;
    if (newSum % 3 === 0) {
      if (newSum > largest) {
        largest = newSum;
      }
    }
  }

  nums.sort(sortNumber);
  console.log('TCL: nums', nums);
  let max1 = Math.pow(10, 4) + 1;
  let max2 = Math.pow(10, 4) + 2;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) {
        continue;
      }
      const element1 = nums[i];
      const element2 = nums[j];
      if (element1 % 3 === 1 && element1 < max1) {
        max1 = element1;
      }
      if (element2 % 3 === 1 && element2 < max1) {
        max1 = element2;
      }
      if (element1 % 3 === 2 && element1 < max2) {
        max2 = element1;
      }
      if (element2 % 3 === 2 && element2 < max2) {
        max2 = element2;
      }
      const element = element2 + element1;
      if (element % 3 === 1 && element1 < max1) {
        max1 = element;
      }
      if (element % 3 === 2 && element < max2) {
        max2 = element;
      }
    }
  }
  // console.log('TCL: max1', max1);
  if (sum - max1 > largest && (sum - max1) % 3 === 0) {
    largest = sum - max1;
  }
  // console.log('TCL: max2', max2);
  if (sum - max2 > largest && (sum - max2) % 3 === 0) {
    largest = sum - max2;
  }

  // for (let i = 0; i < nums.length; i++) {
  //   if (i !== j) {
  //     const element1 = nums[j];
  //     const element2 = nums[i];
  //     const newSum = sum - element1 - element2;
  //     if (newSum % 3 === 0) {
  //       if (newSum > largest) {
  //         largest = newSum;
  //       }
  //     }
  //   }
  // }
  return largest;
};

function sortNumber(a, b) {
  return a - b;
}

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
console.log(maxSumDivThree([4]));
console.log(maxSumDivThree([1, 2, 3, 4, 4]));
console.log(maxSumDivThree([14, 2, 2]));
