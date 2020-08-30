/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b);
  const [min, max] = [position[0], position[position.length - 1]];
  const cal = (step, m) => {
    let i = 1;
    let lastPos = min;
    while (m && i < position.length) {
      if (position[i] - lastPos >= step) {
        m--;
        lastPos = position[i];
      }
      i++;
    }
    if (m === 0) return step;
    return false;
  };
  const recurse = (start, end) => {
    if (start > end) {
      return end;
    }
    const mid = Math.ceil((start + end) / 2);
    const res = cal(mid, m - 1);
    if (res === false) {
      return recurse(start, mid - 1);
    } else {
      return recurse(mid + 1, end);
    }
  };
  return recurse(1, max);
};

console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2));
console.log(maxDistance([1, 2, 3, 7], 3));
console.log(maxDistance([1, 2, 3, 4, 7], 3));
console.log(maxDistance([1, 2, 3, 4, 7, 10], 3));
console.log(maxDistance([1, 2, 3, 7, 10], 4));

console.log(
  maxDistance(
    [
      269826447,
      974181916,
      225871443,
      189215924,
      664652743,
      592895362,
      754562271,
      335067223,
      996014894,
      510353008,
      48640772,
      228945137,
    ],
    3
  )
);
console.log(maxDistance([79, 74, 57, 22], 4));
console.log(
  maxDistance(
    [
      4784,
      9049,
      3151,
      7537,
      2734,
      1287,
      2875,
      6770,
      9565,
      6254,
      6898,
      2509,
      6583,
    ],
    13
  )
);
console.log(
  maxDistance(
    [82, 68, 79, 17, 70, 51, 5, 46, 27, 44, 39, 57, 94, 45, 88, 56],
    9
  )
);
