/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let limit = 0;
  for (let index = 0; index < properties.length; index++) {
    const [atk, def] = properties[index];
    limit = Math.max(limit, atk, def);
  }
  const minArr = new Array(limit + 1).fill(0);
  for (let index = 0; index < properties.length; index++) {
    const [atk, def] = properties[index];
    if (minArr[atk] < def) {
      minArr[atk] = def;
    }
  }
  // console.log('TCL ~ minArr', minArr);
  let curr = minArr[minArr.length - 1];
  for (let i = minArr.length - 2; i >= 0; i--) {
    minArr[i] = Math.max(curr, minArr[i]);
    curr = Math.max(curr, minArr[i]);
  }
  // console.log('TCL ~ minArr', minArr);
  let ans = 0;
  for (let i = 0; i < properties.length; i++) {
    const [atk, def] = properties[i];
    if (def < minArr[atk + 1]) {
      ans++;
    }
  }
  return ans;
};

console.log(
  numberOfWeakCharacters([
    [5, 5],
    [6, 3],
    [3, 6],
  ])
);

// prettier-ignore
console.log(numberOfWeakCharacters([[1,1],[2,1],[2,2],[1,2]])); // 1
