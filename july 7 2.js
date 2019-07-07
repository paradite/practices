// https://leetcode.com/contest/weekly-contest-144/problems/corporate-flight-bookings/

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  let ans = [];
  for (var i = 0; i < n; i++) {
    ans[i] = 0;
  }
  // console.log(ans);
  for (var i = 0; i < bookings.length; i++) {
    const [start, end, num] = bookings[i];
    for (var j = start; j <= end; j++) {
      // console.log(num);
      // console.log(ans[j]);
      ans[j-1] += num;
    }
  }
  return ans;
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));