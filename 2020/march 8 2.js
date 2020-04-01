/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let blueRight = 0;
  let ans = 0;
  const n = light.length;
  const map = Array(light.length).fill(false);
  for (let i = 0; i < light.length; i++) {
    const l = light[i];
    map[l] = true;
    if (blueRight === l - 1) {
      blueRight = l;
      let next = l + 1;
      while (next <= n) {
        if (map[next]) {
          next++;
          blueRight++;
        } else {
          break;
        }
      }
    }
    if (blueRight === i + 1) {
      ans++;
    }
  }
  return ans;
};

console.log(numTimesAllBlue([2, 1, 3, 5, 4]));
console.log(numTimesAllBlue([3, 2, 4, 1, 5]));
console.log(numTimesAllBlue([4, 1, 2, 3]));
console.log(numTimesAllBlue([2, 1, 4, 3, 6, 5]));
console.log(numTimesAllBlue([1, 2, 3, 4, 5, 6]));
console.log(numTimesAllBlue([1]));
