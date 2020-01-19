// https://leetcode.com/contest/weekly-contest-142/problems/car-pooling/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let capList = [];
  for (var i = 0; i < 1000; i++) {
    capList.push(0);
  }
  // console.log(capList.length);
  // console.log(capList);
  for (var i = 0; i < trips.length; i++) {
    let trip = trips[i];
    let number = trip[0];
    let start = trip[1];
    let end = trip[2] - 1;
    // console.log(start);
    // console.log(end);
    for (var j = start; j <= end; j++) {
      capList[j] = capList[j] + number;
      if (capList[j] > capacity) {
        return false;
      }
    }
  }
  // console.log(capList);
  return true;
};
console.log(carPooling([[2,1,5],[3,3,7]], 4));
console.log(carPooling([[2,1,5],[3,3,7]], 5));
console.log(carPooling([[2,1,5],[3,5,7]], 3));
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11));
console.log(carPooling([[7,5,6],[6,7,8],[10,1,6]], 16));