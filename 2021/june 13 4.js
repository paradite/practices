/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  if (firstPlayer > secondPlayer) {
    let tem = firstPlayer;
    firstPlayer = secondPlayer;
    secondPlayer = tem;
  }
  const memo = {};
  const updateMemo = (f, s, count, round) => {
    if (memo[`${f}-${s}-${count}`]) {
      if (round > memo[`${f}-${s}-${count}`][1]) {
        memo[`${f}-${s}-${count}`][1] = round;
        return true;
      }
      if (round < memo[`${f}-${s}-${count}`][0]) {
        memo[`${f}-${s}-${count}`][0] = round;
        return true;
      }
      return false;
    } else {
      memo[`${f}-${s}-${count}`] = [round, round];
      return true;
    }
  };
  const runGame = (count, round, currentIndex, f, s) => {
    if (currentIndex === 0) {
      const updated = updateMemo(f, s, count, round);
      if (!updated) return;
    }
    if (currentIndex > count / 2) {
      runGame((count / 2 + count) & 2, round + 1, 0, f, s);
    } else {
      if (currentIndex < f) {
        runGame(count, round, currentIndex + 1, f, s);
      }
    }
  };
};
