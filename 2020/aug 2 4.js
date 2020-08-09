/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function (nums1, nums2) {
  const mod = Math.pow(10, 9) + 7;
  let max = 0;
  const maps = [{}, {}];
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    maps[0][element] = i;
  }
  for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
    maps[1][element] = i;
  }
  const arrs = [nums1, nums2];
  const walk = (index, arrIndex, curr) => {
    if (curr > max) {
      max = curr;
    }
    let arr = arrs[arrIndex];
    if (arr[index] >= 0) {
      const altIndex = maps[1 - arrIndex][arr[index]];
      if (altIndex >= 0) {
        // exist
        // find next intersection
        let next = index + 1;
        while (!(maps[1 - arrIndex][arr[next]] >= 0) && next < arr.length) {
          next++;
        }
        if (next < arr.length) {
          currend = next - 1;
          altend = maps[1 - arrIndex][arr[next]] - 1;
        } else {
          currend = arr.length - 1;
          altend = arrs[1 - arrIndex].length - 1;
        }
        let currSum = 0;
        let altSum = 0;
        for (let i = index + 1; i <= currend; i++) {
          currSum = currSum + arr[i];
        }
        for (let i = altIndex + 1; i <= altend; i++) {
          altSum = altSum + arrs[1 - arrIndex][i];
        }
        if (currSum > altSum) {
          walk(next, arrIndex, curr + currSum + arr[index]);
        } else {
          walk(
            maps[1 - arrIndex][arr[next]],
            1 - arrIndex,
            curr + altSum + arr[index]
          );
        }
      } else {
        // do not exist
        walk(index + 1, arrIndex, curr + arr[index]);
      }
    }
  };
  walk(0, 0, 0);
  walk(0, 1, 0);
  return max % mod;
};

console.log(maxSum([2, 4, 5, 8, 10], [4, 6, 8, 9]));
