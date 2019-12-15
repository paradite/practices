/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let ans = 0;
  if (points.length === 1) {
    return 0;
  }
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    const xdiff = x2 > x1 ? x2 - x1 : x1 - x2;
    const ydiff = y2 > y1 ? y2 - y1 : y1 - y2;
    const diag = ydiff > xdiff ? xdiff : ydiff;
    const remaining = Math.abs(diag - xdiff) + Math.abs(diag - ydiff);
    ans += diag + remaining;
  }
  return ans;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]));
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]));
