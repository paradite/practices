/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let found = false;
    for (let j = 0; j < pieces.length; j++) {
      const p = pieces[j];
      if (p.length > 0 && p[0] === element) {
        p.shift();
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
};
