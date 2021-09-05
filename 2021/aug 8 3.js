/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let excessopen = 0;
  let openbalance = 0;
  let availableclose = s.length / 2;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      availableclose--;
      if (openbalance <= 0) {
        excessopen++;
        openbalance++;
      } else {
        openbalance--;
      }
    } else {
      // [
      if (openbalance <= 0) {
        openbalance++;
      } else {
        if (i >= s.length / 2 && availableclose < excessopen) {
          openbalance--;
          excessopen--;
          ans++;
        } else {
          openbalance++;
        }
      }
    }
    // console.log('TCL ~ openbalance excessopen', openbalance, excessopen);
  }
  return ans + excessopen;
};

console.log(minSwaps('][][')); //1
console.log(minSwaps(']]][[[')); //2
console.log(minSwaps('[]')); //0
console.log(minSwaps('][][][')); //1
console.log(minSwaps('][[]][][[][]')); //1
