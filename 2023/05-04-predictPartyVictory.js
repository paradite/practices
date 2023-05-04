/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const invalidIndex = {};
  const nameMap = {
    R: 'Radiant',
    D: 'Dire',
  };
  while (true) {
    for (let i = 0; i < senate.length; i++) {
      if (invalidIndex[i]) {
        continue;
      }
      const s = senate[i];
      let banned = false;
      for (let j = i + 1; j < senate.length; j++) {
        const next = senate[j];
        if (next !== s && !invalidIndex[j]) {
          invalidIndex[j] = true;
          banned = true;
          break;
        }
      }
      if (!banned) {
        for (let j = 0; j < i; j++) {
          const next = senate[j];
          if (next !== s && !invalidIndex[j]) {
            invalidIndex[j] = true;
            banned = true;
            break;
          }
        }
      }
      if (!banned) {
        return nameMap[s];
      }
    }
  }
};

console.log(predictPartyVictory('RD'));
console.log(predictPartyVictory('RDD'));
console.log(predictPartyVictory('RDDD'));
console.log(predictPartyVictory('RDRD'));
console.log(predictPartyVictory('RDRDD'));
console.log(predictPartyVictory('RDDRDD'));
console.log(predictPartyVictory('RDDRRDD'));
console.log(predictPartyVictory('DRRDRDRDRDDRDRDRD'));

// "DRRDRDRDRDDRDRDRD"
// "D_RDRDRDRDDRDRDRD"
// "D_R_RDRDRDDRDRDRD"
// "D_R_R_RDRDDRDRDRD"
// "D_R_R_R_RDDRDRDRD"
// "D_R_R_R_R_DRDRDRD"
// "D_R_R_R_R_D_DRDRD"
// "D_R_R_R_R_D_D_DRD"
// "D_R_R_R_R_D_D_D_D"

// Input: senate = "RD"
// Output: "Radiant"

// Input: senate = "RDD"
// Output: "Dire"
