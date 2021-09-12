function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
  const arr = [];
  const dfs = (currChArr, currBits, currIndex) => {
    if (currIndex >= s.length) return;
    const newChArr = [...currChArr, s[currIndex]];
    const newBits = currBits + 2 ** currIndex;
    if (checkPalindrom(newChArr.join(''))) {
      arr.push([newChArr, newBits]);
    }
    dfs(currChArr, currBits, currIndex + 1);
    dfs(newChArr, newBits, currIndex + 1);
  };
  dfs([], 0, 0);
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    const [chs1, bits1] = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const [chs2, bits2] = arr[j];
      if ((bits1 & bits2) === 0) {
        ans = Math.max(ans, chs1.length * chs2.length);
      }
    }
  }
  return ans;
};

console.log(maxProduct('leetcodecom'));
console.log(maxProduct('bb'));
console.log(maxProduct('accbcaxxcxx'));
