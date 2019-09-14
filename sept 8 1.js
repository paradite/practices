/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) {
    let t = destination;
    destination = start;
    start = t;
  }
  const agg = [0];
  const aggRev = [0];
  for (let index = 0; index < distance.length; index++) {
    agg[index + 1] = agg[index] + distance[index];
  }
  aggRev[distance.length] = 0;
  for (let index = distance.length; index > 1; index--) {
    aggRev[index - 1] = aggRev[index] + distance[index - 1];
  }
  // console.log(agg);
  // console.log(aggRev);

  const res1 = agg[destination] - agg[start];
  // console.log("TCL: start", start)
  // console.log("TCL: destination", destination)
  const res2 = aggRev[destination] + agg[start];

  return res1 < res2 ? res1 : res2;
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0]
  , 7
  , 2));
