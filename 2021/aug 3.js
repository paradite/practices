/**
 * @param {number} neededApples
 * @return {number}
 * Given an integer neededApples, return the minimum perimeter of a plot such that at least neededApples apples are inside or on the perimeter of that plot.
 */
var minimumPerimeter = function (neededApples) {
  let circle = 1;
  let total = 12;
  let prevSides = [];
  let prevSidesSum = 0;
  while (total < neededApples) {
    circle++;
    let newCenter = circle;
    let newEdge = circle * 2;
    let newSide = circle + circle - 1;
    // console.log('TCL ~ prevSide', prevSide);
    let circleTotal = newCenter * 4 + newEdge * 4 + newSide * 8;
    // console.log('TCL ~ prevSides prevSidesSum', prevSides, prevSidesSum);
    prevSidesSum += prevSides.length;
    circleTotal += prevSidesSum * 8;
    // for (let i = 0; i < prevSides.length; i++) {
    //   prevSides[i] = prevSides[i] + 1;
    //   circleTotal += prevSides[i] * 8;
    // }
    total += circleTotal;
    prevSides.push(newSide);
    prevSidesSum += newSide;
    // console.log('TCL ~ circle circleTotal total', circle, circleTotal, total);
    // console.log('TCL ~ total', total);
  }
  return circle * 4 * 2;
};

console.log(minimumPerimeter(1));
console.log(minimumPerimeter(12));
console.log(minimumPerimeter(13));
console.log(minimumPerimeter(100));
console.log(minimumPerimeter(1000));
console.log(minimumPerimeter(1000000000));
console.log(minimumPerimeter(462332582464270));
// 389688
