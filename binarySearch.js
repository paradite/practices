/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return recurse(nums, target, 0, nums.length - 1);
};

var searchByValue = function (nums, target) {
  let currMax = undefined;
  const getValue = (index, arr) => {
    return arr[index];
  };

  const recurseByValue = (input, target, start, end) => {
    if (start > end) {
      return currMax ? currMax : -1;
    }
    const mid = Math.ceil((start + end) / 2);
    const midValue = getValue(mid, input);
    // console.log('TCL ~ mid', mid);
    // console.log('TCL ~ midValue', midValue);
    // console.log('TCL ~ target', target);
    // console.log('TCL ~ midValue < target', midValue < target);
    if (midValue < target) {
      if (currMax === undefined || midValue > currMax) {
        currMax = midValue;
      }
      return recurseByValue(input, target, mid + 1, end);
    } else if (midValue > target) {
      return recurseByValue(input, target, start, mid - 1);
    } else {
      return mid;
    }
  };
  return recurseByValue(nums, target, 0, nums.length - 1);
};

const recurse = (nums, target, start, end) => {
  if (start > end) {
    return -1;
  }
  const mid = Math.ceil((start + end) / 2);
  if (nums[mid] > target) {
    return recurse(nums, target, start, mid - 1);
  } else if (nums[mid] < target) {
    return recurse(nums, target, mid + 1, end);
  } else {
    return mid;
  }
};

console.log(search([9], 9));
console.log(search([-1, 9], 9));
console.log(search([-1, 9, 12], 9));
console.log(search([-1, 0, 9, 12], 9));
console.log(search([-1, 0, 3, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12], 13));

console.log('');
console.log(searchByValue([9], 9));
console.log(searchByValue([-1, 9], 9));
console.log(searchByValue([-1, 9, 12], 9));
console.log(searchByValue([-1, 0, 9, 12], 9));
console.log(searchByValue([-1, 0, 3, 9, 12], 9));
console.log(searchByValue([-1, 0, 3, 5, 9, 12], 9));
console.log(searchByValue([-1, 0, 3, 5, 9, 12], 2));
console.log(searchByValue([-1, 0, 3, 5, 9, 12], 13));
