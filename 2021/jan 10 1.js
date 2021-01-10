/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let ans = [first];
  for (let i = 0; i < encoded.length; i++) {
    const element = encoded[i];
    const next = ans[i] ^ element;
    ans.push(next);
  }
  return ans;
};

console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));
