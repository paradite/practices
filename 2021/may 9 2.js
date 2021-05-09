/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let max = 0;
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    for (let j = i + max + 1; j < nums2.length; j++) {
      const n2 = nums2[j];
      if (n1 <= n2 && j - i > max) {
        max = j - i;
      }
    }
  }
  return max;
};

console.log(maxDistance([2, 2, 2], [10, 10, 1]));
