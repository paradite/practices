/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const mod = Math.pow(10, 9) + 7;

  const nums1Sorted = [...nums1].sort((a, b) => a - b);

  var search = function (nums, target) {
    return recurse(nums, target, 0, nums.length - 1);
  };

  const recurse = (nums, target, start, end) => {
    if (start >= end) {
      if (Math.abs(nums[start] - target) < Math.abs(nums[end] - target)) {
        return nums[start];
      } else {
        let curr = Math.abs(nums[end] - target);
        let currN = nums[end];
        if (end - 1 >= 0) {
          if (Math.abs(nums[end - 1] - target) < curr) {
            curr = Math.abs(nums[end - 1] - target);
            currN = nums[end - 1];
          }
        }
        if (end + 1 < nums.length) {
          if (Math.abs(nums[end + 1] - target) < curr) {
            curr = Math.abs(nums[end + 1] - target);
            currN = nums[end + 1];
          }
        }
        return currN;
      }
    }
    const mid = Math.ceil((start + end) / 2);
    if (nums[mid] > target) {
      return recurse(nums, target, start, mid - 1);
    } else if (nums[mid] < target) {
      return recurse(nums, target, mid + 1, end);
    } else {
      return nums[mid];
    }
  };

  const closest = [];
  for (let i = 0; i < nums2.length; i++) {
    closest.push(search(nums1Sorted, nums2[i]));
  }
  let sum = 0;
  let maxReduce = 0;
  for (let i = 0; i < nums1.length; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    // console.log('TCL ~ nums1[i]', nums1[i]);
    // console.log('TCL ~ nums2[i]', nums2[i]);
    // console.log('TCL ~ diff', diff);
    sum += diff;
    sum = sum % mod;
    const alt = Math.abs(closest[i] - nums2[i]);
    const reduce = diff - alt;
    if (reduce > maxReduce) {
      // console.log('TCL ~ i', i);
      // console.log('TCL ~ nums1[i]', nums1[i]);
      // console.log('TCL ~ nums2[i]', nums2[i]);
      // console.log('TCL ~ closest[i]', closest[i]);
      maxReduce = reduce;
    }
  }
  // console.log('TCL ~ sum', sum);
  // console.log('TCL ~ maxReduce', maxReduce);
  return sum - maxReduce;
};

console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]));
console.log(minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4]));
// 3285
// prettier-ignore
console.log(minAbsoluteSumDiff(
[38,48,73,55,25,47,45,62,15,34,51,20,76,78,38,91,69,69,73,38,74,75,86,63,73,12,100,59,29,28,94,43,100, 2,53,31,73,82,70,94, 2,38,50,67, 8,40,88,87,62,90,86,33,86,26,84,52,63,80,56,56,56,47,12,50,12,59,52, 7,40,16,53,61,76,22,87,75,14,63,96,56,65,16,70,83,51,44,13,14,80,28,82, 2, 5,57,77,64,58,85,33,24],
[90,62, 8,56,33,22, 9,58,29,88,10,66,48,79,44,50,71, 2, 3,100,88,16,24,28,50,41,65,59,83,79,80,91,1,62,13,37,86,53,43,49,17,82,27,17,10,89,40,82,41, 2,48,98,16,43,62,33,72,35,10,24,80,29,49, 5,14,38,30,48,93,86,62,23,17,39,40,96,10,75, 6,38, 1, 5,54,91,29,36,62,73,51,92,89,88,74,91,87,34,49,56,33,67]));

// prettier-ignore
[
  90, 62, 8,  56,        33,        22,  8,
  58, 29, 88, 8,         65,        48,  78,
  44, 50, 70, 2,         2,         100, 88,
  16, 24, 28, 50,        40,        65,  59,
  83, 78, 80, 91,        undefined, 62,  13,
  38, 86, 53, 43,        48,        16,  82,
  26, 16, 8,  88,        40,        82,  40,
  2,  48, 96, 16,        43,        62,  33,
  73, 34, 8,  24,        80,        29,  48,
  5,  14, 38, 29,        48,        94,  86,
  62, 22, 16, 38,        40,        96,  8,
  75, 5,  38, undefined, 5,         53,  91,
  29, 34, 62, 73,        51,        91,  88,
  88, 74, 91, 87,        34,        48,  56,
  33, 67
]
