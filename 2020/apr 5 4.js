/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  const map = {};
  const dfs = (turn, alice, bob, arrIndex) => {
    if (map[`${turn}-${alice}-${bob}-${arrIndex}`]) {
      return map[`${turn}-${alice}-${bob}-${arrIndex}`];
    }
    // console.log('dfs -> turn, alice, bob, arrIndex', turn, alice, bob, arrIndex);
    if (turn % 2 === 0) {
      // alice
      let canTie = false;
      if (arrIndex < stoneValue.length) {
        const r = dfs(turn + 1, alice + stoneValue[arrIndex], bob, arrIndex + 1);
        if (r === 'Alice') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Alice';
          return 'Alice';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (arrIndex + 1 < stoneValue.length) {
        const anew = alice + stoneValue[arrIndex] + stoneValue[arrIndex + 1];
        const r = dfs(turn + 1, anew, bob, arrIndex + 2);
        if (r === 'Alice') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Alice';
          return 'Alice';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (arrIndex + 2 < stoneValue.length) {
        const anew = alice + stoneValue[arrIndex] + stoneValue[arrIndex + 1] + stoneValue[arrIndex + 2];
        const r = dfs(turn + 1, anew, bob, arrIndex + 3);
        if (r === 'Alice') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Alice';
          return 'Alice';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (alice === bob && arrIndex === stoneValue.length) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Tie';
      } else if (alice > bob && arrIndex === stoneValue.length) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Alice';
      } else if (canTie) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Tie';
      } else {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Bob';
      }
      return map[`${turn}-${alice}-${bob}-${arrIndex}`];
    } else {
      // bob
      let canTie = false;
      if (arrIndex < stoneValue.length) {
        const r = dfs(turn + 1, alice, bob + stoneValue[arrIndex], arrIndex + 1);
        if (r === 'Bob') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Bob';
          return 'Bob';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (arrIndex + 1 < stoneValue.length) {
        const bnew = bob + stoneValue[arrIndex] + stoneValue[arrIndex + 1];
        const r = dfs(turn + 1, alice, bnew, arrIndex + 2);
        if (r === 'Bob') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Bob';
          return 'Bob';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (arrIndex + 2 < stoneValue.length) {
        const bnew = bob + stoneValue[arrIndex] + stoneValue[arrIndex + 1] + stoneValue[arrIndex + 2];
        const r = dfs(turn + 1, alice, bnew, arrIndex + 3);
        if (r === 'Bob') {
          map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Bob';
          return 'Bob';
        }
        if (r === 'Tie') {
          canTie = true;
        }
      }
      if (alice === bob && arrIndex === stoneValue.length) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Tie';
        return 'Tie';
      }
      if (alice < bob && arrIndex === stoneValue.length) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Bob';
        return 'Bob';
      }
      if (canTie) {
        map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Tie';
        return 'Tie';
      }
      map[`${turn}-${alice}-${bob}-${arrIndex}`] = 'Alice';
      return 'Alice';
    }
  };
  return dfs(0, 0, 0, 0);
};

console.log(stoneGameIII([1, 2, 3, 7]));
console.log(stoneGameIII([1, 2, 3, -9]));
console.log(stoneGameIII([1, 2, 3, 6]));
console.log(stoneGameIII([1, 2, 3, -1, -2, -3, 7]));
console.log(stoneGameIII([-1, -2, -3]));
