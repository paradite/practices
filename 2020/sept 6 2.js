/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  let ans = 0;
  const cal = (arr1, arr2) => {
    const exist = {};
    const existmap = {};
    for (let i = 0; i < arr2.length; i++) {
      const element = arr2[i];
      exist[element] = true;
      if (existmap[element]) {
        existmap[element] = existmap[element] + 1;
      } else {
        existmap[element] = 1;
      }
    }
    for (let i = 0; i < arr1.length; i++) {
      const e = arr1[i];
      const e2 = e * e;
      // console.log('cal -> arr2', arr2);
      // console.log('cal -> ans', ans);
      for (let j = 0; j < arr2.length; j++) {
        const k = arr2[j];
        const remainder = e2 / k;
        if (exist[remainder]) {
          // console.log('cal -> existmap[remainder]', existmap[remainder]);
          // console.log('cal -> k', k);
          // console.log('cal -> remainder', remainder);
          if (remainder === k) {
            ans = ans + existmap[remainder] - 1;
          } else {
            ans = ans + existmap[remainder];
          }
        }
      }
    }
  };
  cal(nums1, nums2);
  // console.log('numTriplets -> ans', ans);
  cal(nums2, nums1);
  // console.log('numTriplets -> ans', ans);
  return ans / 2;
};

console.log(numTriplets([1, 1], [1, 1, 1]));
