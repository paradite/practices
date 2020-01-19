/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const gradient = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  for (let i = 2; i < coordinates.length; i++) {
    const newGradient = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]);
    if (newGradient !== gradient) {
      return false;
    }
  }
  return true;
};

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]));
