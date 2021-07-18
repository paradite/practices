/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const time = dist.map((d, i) => d / speed[i]);
  time.sort((a, b) => a - b);
  console.log('TCL ~ time', time);
  let curr = 0;
  for (let i = 0; i < time.length; i++) {
    const t = time[i];
    if (curr === 0 && t === 0) {
      curr += 1;
    } else if (curr >= t) {
      return curr;
    } else {
      curr += 1;
    }
  }
  return curr;
};

console.log(eliminateMaximum([1, 3, 4], [1, 1, 1]));
console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]));
console.log(eliminateMaximum([3, 2, 4], [5, 3, 2]));
console.log(eliminateMaximum([3, 2, 4], [1, 3, 2]));
console.log(eliminateMaximum([3, 5, 7, 4, 5], [2, 3, 6, 3, 2]));
