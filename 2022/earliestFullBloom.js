/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
  const times = [];
  for (let i = 0; i < plantTime.length; i++) {
    times.push([plantTime[i], growTime[i]]);
  }

  times.sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    } else if (b[1] < a[1]) {
      return -1;
    } else {
      return a[0] - b[0];
    }
  });
  let ans = 0;
  let waiting = 0;
  // console.log('TCL ~ times', times);
  for (let i = 0; i < times.length; i++) {
    const [plant, grow] = times[i];
    ans += plant;
    waiting = waiting - plant;
    if (waiting < 0) {
      waiting = 0;
    }
    waiting = Math.max(waiting, grow);
  }
  ans += waiting;
  return ans;
};

console.log(earliestFullBloom([1, 4, 3], [2, 3, 1]));
console.log(earliestFullBloom([1, 2, 3, 2], [2, 1, 2, 1]));
console.log(earliestFullBloom([1], [1]));
console.log(earliestFullBloom([1, 4, 3, 1, 5], [2, 3, 1, 1, 1]));
// prettier-ignore
console.log(earliestFullBloom([3,11,29,4,4,26,26,12,13,10,30,19,27,2,10], [10,13,22,17,18,15,21,11,24,14,18,23,1,30,6])); // 227
// prettier-ignore
console.log(earliestFullBloom([15,29,24,8,14,26,12,15,27,2,5,10,7,17,9,5,9,21,11,13,13,2,1,17,11],[26,20,10,9,8,27,1,19,13,22,10,10,21,14,17,14,17,30,3,3,14,16,7,12,25])); // 324
