if (typeof _ === 'undefined') {
  _ = require('lodash');
}

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let sides = [];
  let max = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const [l, w] = rectangles[i];
    if (l < w) {
      if (l > max) max = l;
      sides.push(l);
    } else {
      if (w > max) max = w;
      sides.push(w);
    }
  }
  const map = _.countBy(sides);
  // console.log('countGoodRectangles -> map', map);
  return map[max];
};

// prettier-ignore
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));
console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);
