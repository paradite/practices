/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  // let x;
  // let y = cheeseSlices - x;
  // x * 4 + (cheeseSlices - x) * 2 = tomatoSlices;
  // x * 4 + cheeseSlices * 2 - x * 2 = tomatoSlices;
  // x * 2 + cheeseSlices * 2 = tomatoSlices;
  // x * 2 = tomatoSlices - cheeseSlices * 2;
  // x = (tomatoSlices - cheeseSlices * 2) / 2;
  let big = (tomatoSlices - cheeseSlices * 2) / 2;
  // console.log('TCL: big', big);
  let small = cheeseSlices - big;
  // console.log('TCL: small', small);
  if (Math.floor(big) !== big) {
    return [];
  }
  if (big < 0 || small < 0) {
    return [];
  }
  return [big, small];
};

console.log(numOfBurgers(16, 7));
console.log(numOfBurgers(17, 4));
console.log(numOfBurgers(4, 17));
console.log(numOfBurgers(0, 0));
console.log(numOfBurgers(2, 1));
console.log(numOfBurgers(4, 1));
console.log(numOfBurgers(6, 2));
