const _ = require('lodash');
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const map = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    map[letter] = Array(votes[0].length).fill(0);
  }
  for (let i = 0; i < votes.length; i++) {
    const vote = votes[i];
    for (let j = 0; j < vote.length; j++) {
      const team = vote[j];
      map[team][j] = map[team][j] + 1;
    }
  }
  let sorted = Array.from(votes[0]).sort();
  for (let i = votes[0].length - 1; i >= 0; i--) {
    sorted = _.sortBy(sorted, [
      a => {
        return -map[a][i];
      }
    ]);
  }
  return sorted.join('');
};

console.log(rankTeams(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']));
console.log(rankTeams(['WXYZ', 'XYZW']));
console.log(rankTeams(['ZMNAGUEDSJYLBOPHRQICWFXTVK']));
console.log(rankTeams(['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']));
console.log(rankTeams(['M', 'M', 'M', 'M']));
