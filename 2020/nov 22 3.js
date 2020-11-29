/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let prefixEven = [nums[0], nums[0]];
  let prefixOdd = [0, nums[1]];

  for (let i = 2; i < nums.length; i++) {
    const element = nums[i];
    if (i % 2 === 0) {
      prefixEven[i] = prefixEven[i - 2] + element;
      prefixOdd[i] = prefixOdd[i - 1];
    } else {
      prefixOdd[i] = prefixOdd[i - 2] + element;
      prefixEven[i] = prefixEven[i - 1];
    }
  }
  // console.log('waysToMakeFair -> prefixEven', prefixEven);
  // console.log('waysToMakeFair -> prefixOdd', prefixOdd);
  const getRemoveSum = (index) => {
    if (index === 0) {
      return [
        prefixOdd[nums.length - 1],
        prefixEven[nums.length - 1] - nums[0],
      ];
    }
    // if (index % 2 === 0) {
    let oddBefore = prefixOdd[index - 1];
    // console.log('getRemoveSum -> oddBefore', oddBefore);
    let oddAfter = prefixEven[nums.length - 1] - prefixEven[index];
    // console.log('getRemoveSum -> oddAfter', oddAfter);
    let evenBefore = prefixEven[index - 1];
    // console.log('getRemoveSum -> evenBefore', evenBefore);
    let evenAfter = prefixOdd[nums.length - 1] - prefixOdd[index];
    // console.log('getRemoveSum -> evenAfter', evenAfter);
    return [evenBefore + evenAfter, oddBefore + oddAfter];
    // }
  };
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log('waysToMakeFair -> i', i);
    let removeSum = getRemoveSum(i);
    // console.log('waysToMakeFair -> removeSum', removeSum);
    if (removeSum[0] === removeSum[1]) ans++;
  }
  return ans;
};

console.log(waysToMakeFair([2, 1, 6, 4]));
console.log(waysToMakeFair([1, 1, 1]));
console.log(waysToMakeFair([1, 2, 3]));
