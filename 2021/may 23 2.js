/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  let currMax = null;

  const getValue = (input, dist) => {
    // console.log('TCL ~ input', input);
    let hours = 0;
    for (let i = 0; i < dist.length - 1; i++) {
      const d = dist[i];
      hours += Math.ceil(d / input);
    }
    hours += dist[dist.length - 1] / input;
    // console.log('TCL ~ hours', hours);
    return hours;
  };

  const recurse = (dist, target, start, end) => {
    if (start > end) {
      return currMax ? currMax : -1;
    }
    const mid = Math.ceil((start + end) / 2);
    const midValue = getValue(mid, dist);
    if (midValue < target) {
      if (!currMax || mid < currMax) {
        currMax = mid;
      }
      return recurse(dist, target, start, mid - 1);
    } else if (midValue > target) {
      return recurse(dist, target, mid + 1, end);
    } else {
      return mid;
    }
  };

  return recurse(dist, hour, 0, Math.pow(10, 7));
};

console.log(minSpeedOnTime([1, 3, 2], 6));
console.log(minSpeedOnTime([1, 3, 2], 2.7));
console.log(minSpeedOnTime([1, 3, 2], 1.9));
console.log(minSpeedOnTime([2, 1, 5, 4, 4, 3, 2, 9, 2, 10], 75.12));
