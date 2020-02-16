/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  const dateMap = {};
  let ans = 0;
  events.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  while (events.length > 0) {
    const [start, end] = events.pop();
    for (let i = start; i <= end; i++) {
      if (!dateMap[i]) {
        dateMap[i] = true;
        ans++;
        break;
      }
    }
  }
  return ans;
};

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4]
  ])
);

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2]
  ])
);

console.log(
  maxEvents([
    [1, 4],
    [4, 4],
    [2, 2],
    [3, 4],
    [1, 1]
  ])
);
console.log(maxEvents([[1, 100000]]));
console.log(
  maxEvents([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7]
  ])
);
