/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let max = 0;
  const isSubsequence = (k) => {
    const set = new Set();
    for (let i = 0; i < k; i++) {
      const element = removable[i];
      set.add(element);
    }
    let i = 0;
    let j = 0;
    while (i < s.length) {
      if (set.has(i)) {
        i++;
      } else if (s[i] === p[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
    if (j === p.length) return true;
    return false;
  };
  const recurse = (start, end) => {
    if (start > end) {
      return max;
    }
    const mid = Math.ceil((start + end) / 2);
    const works = isSubsequence(mid);
    if (!works) {
      return recurse(start, mid - 1);
    } else if (works) {
      max = Math.max(max, mid);
      return recurse(mid + 1, end);
    } else {
      return mid;
    }
  };
  return recurse(0, removable.length);
};

console.log(maximumRemovals('abcacb', 'ab', [3, 1, 0]));
