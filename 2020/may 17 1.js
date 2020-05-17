/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  let ans = 0;
  for (let i = 0; i < startTime.length; i++) {
    const s = startTime[i];
    const e = endTime[i];
    if (queryTime <= e && queryTime >= s) {
      ans++;
    }
  }
  return ans;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
console.log(busyStudent([4], [4], 4));
console.log(busyStudent([4], [4], 5));
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7));
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
