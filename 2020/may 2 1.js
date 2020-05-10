/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  // console.log('kidsWithCandies -> max', max);
  let ans = [];
  for (let i = 0; i < candies.length; i++) {
    const element = candies[i];
    if (element + extraCandies >= max) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }
  return ans;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
