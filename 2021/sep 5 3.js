/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function (nextVisit) {
  const mod = Math.pow(10, 9) + 7;
  let unvisistedN = nextVisit.length;
  const visitMap = {
    0: 0,
  };
  let day = 0;
  let toVisit = 0;
  while (unvisistedN > 0) {
    // console.log(
    //   'TCL ~ toVisit unvisistedN visitMap',
    //   toVisit,
    //   unvisistedN,
    //   visitMap
    // );
    if (!visitMap[toVisit]) {
      unvisistedN--;
      // console.log('TCL ~ unvisistedN', unvisistedN);
      visitMap[toVisit] = 1;
      // console.log('TCL ~ visitMap', visitMap);
    } else {
      visitMap[toVisit] = visitMap[toVisit] + 1;
    }
    if (visitMap[toVisit] % 2 === 0) {
      toVisit = (toVisit + 1) % mod;
    } else {
      toVisit = nextVisit[toVisit];
    }
    day = (day + 1) % mod;
  }
  return day - 1;
};

console.log(firstDayBeenInAllRooms([0, 0]));
console.log(firstDayBeenInAllRooms([0, 0, 2]));
console.log(firstDayBeenInAllRooms([0, 1, 2, 0]));
// prettier-ignore
console.log(firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
