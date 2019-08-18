/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  let solMap = [[]];
  for (let i = 1; i <= f; i++) {
    solMap[0][i] = 1;    
  }

  for (let i = 1; i < d; i++) {
    solMap[i] = [];
    for (let j = 1; j <= f; j++) {
      const face = j;
      for (let k = 1; k <= solMap[i - 1].length; k++) {
        if (solMap[i - 1][k] && solMap[i][k + face]) {
          solMap[i][k + face] = (solMap[i][k + face] + solMap[i - 1][k]) % (Math.pow(10, 9) + 7);
        } else if(solMap[i - 1][k]) {
          solMap[i][k + face] = solMap[i - 1][k];
        }
      }
    }
  }
  console.log("TCL: numRollsToTarget -> solMap", solMap)
  
  
  if (solMap[d - 1][target]) {
    return solMap[d - 1][target];
  }

  
  return 0;
};

// console.log(numRollsToTarget(1, 3, 3));
// console.log(numRollsToTarget(2, 6, 7));
// console.log(numRollsToTarget(3, 6, 7));
// console.log(numRollsToTarget(2, 5, 10));
console.log(numRollsToTarget(1, 2, 3));
// console.log(numRollsToTarget(4, 30, 7));
// console.log(numRollsToTarget(10, 10, 10));
