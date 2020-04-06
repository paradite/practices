/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
  const squareEdges = [
    [x1, y1],
    [x1, y2],
    [x2, y1],
    [x2, y2]
  ];
  // case 1: circle contains square edge
  for (let i = 0; i < squareEdges.length; i++) {
    const [x, y] = squareEdges[i];
    const dist = Math.sqrt(Math.pow(x_center - x, 2) + Math.pow(y_center - y, 2));
    if (dist <= radius) return true;
  }
  const circleEdges = [
    [x_center + radius, y_center],
    [x_center - radius, y_center],
    [x_center, y_center + radius],
    [x_center, y_center - radius]
  ];
  if (x2 < x1) {
    let temp = x1;
    x1 = x2;
    x2 = temp;
  }
  if (y2 < y1) {
    let temp = y1;
    y1 = y2;
    y2 = temp;
  }
  // case 2: square contains circle edge
  for (let i = 0; i < circleEdges.length; i++) {
    const [x, y] = circleEdges[i];
    if (x >= x1 && x <= x2) {
      if (y <= y2 && y >= y1) {
        return true;
      }
    }
  }
  // case 3: square and circle cut through each other without edges being inside another
  if (x2 > x_center + radius && x1 < x_center - radius) {
    if (y1 < y_center + radius && y2 > y_center - radius) {
      return true;
    }
  }
  if (x2 < x_center + radius && x1 > x_center - radius) {
    if (y2 > y_center + radius && y1 < y_center - radius) {
      return true;
    }
  }
  return false;
};

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1));
console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1));
console.log(checkOverlap(1, 1, 1, -3, -3, 3, 3));
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1));
console.log(checkOverlap(1.2, -5.5, -0.2, -5.2, -1.7, -4.6, 1.7));
console.log(checkOverlap(1206, -5597, -276, -5203, -1795, -4648, 1721));
