/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length;
  nums1.reverse();
  nums2.reverse();
  // console.log('TCL: nums1', nums1);
  // console.log('TCL: nums2', nums2);
  const medianFirst = Math.ceil(total / 2);
  let count = 0;
  let totalSum = 0;
  while (nums1.length || nums2.length) {
    const num1 = nums1.pop();
    const num2 = nums2.pop();
    let pick = null;
    // JS number is falsy
    if (num1 !== undefined && num2 !== undefined) {
      if (num1 < num2) {
        pick = num1;
        nums2.push(num2);
      } else {
        pick = num2;
        nums1.push(num1);
      }
    } else if (num1 !== undefined) {
      pick = num1;
    } else if (num2 !== undefined) {
      pick = num2;
    }
    count++;
    if (count === medianFirst) {
      totalSum += pick;
      if (total % 2 !== 0) {
        break;
      }
    }
    if (count === medianFirst + 1) {
      totalSum += pick;
      break;
    }
  }
  return total % 2 !== 0 ? totalSum : totalSum / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 2, 3, 5, 7], [8, 9, 10, 11]));
console.log(findMedianSortedArrays([1], []));
console.log(
  findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6])
);
