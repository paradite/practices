/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let ans = 0;
  const dfs = (curIndex, prevNum, PrevLength, d) => {
    // if (PrevLength === 1) {
    // console.log('dfs -> curIndex, prevNum, PrevLength, d', curIndex, prevNum, PrevLength, d);
    // }
    if (curIndex >= rating.length) return;
    const n = rating[curIndex];
    if (d === 0) {
      if (n > prevNum) {
        if (PrevLength === 2) {
          // console.log('GOT dfs -> curIndex, prevNum, PrevLength, d', curIndex, prevNum, PrevLength, d);
          ans++;
          dfs(curIndex + 1, prevNum, PrevLength, d);
        } else {
          dfs(curIndex + 1, n, PrevLength + 1, d);
          dfs(curIndex + 1, prevNum, PrevLength, d);
        }
      } else {
        dfs(curIndex + 1, prevNum, PrevLength, d);
      }
    } else {
      if (n < prevNum) {
        if (PrevLength === 2) {
          // console.log('GOT dfs -> curIndex, prevNum, PrevLength, d', curIndex, prevNum, PrevLength, d);
          ans++;
          dfs(curIndex + 1, prevNum, PrevLength, d);
        } else {
          dfs(curIndex + 1, n, PrevLength + 1, d);
          dfs(curIndex + 1, prevNum, PrevLength, d);
        }
      } else {
        dfs(curIndex + 1, prevNum, PrevLength, d);
      }
    }
  };
  dfs(0, -1, 0, 0);
  dfs(0, Infinity, 0, 1);
  // console.log('numTeams -> ans', ans);
  return ans;
};

console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([2, 1, 3]));
console.log(numTeams([1, 2, 3, 4]));
