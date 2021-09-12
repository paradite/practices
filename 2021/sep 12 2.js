/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let map = {};
  for (let i = 0; i < rectangles.length; i++) {
    const [width, height] = rectangles[i];
    rectangles[i] = parseFloat(width / height).toFixed(12);
    map[rectangles[i]] = map[rectangles[i]] ? map[rectangles[i]] + 1 : 1;
  }
  let ans = 0;
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element > 1) {
        ans = ans + ((1 + element - 1) * (element - 1 - 1 + 1)) / 2;
      }
    }
  }
  return ans;
};
