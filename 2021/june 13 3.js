/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  let exists = [false, false, false];
  for (let i = 0; i < triplets.length; i++) {
    const triplet = triplets[i];
    let valid = true;
    for (let j = 0; j < triplet.length; j++) {
      if (triplet[j] > target[j]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      for (let j = 0; j < triplet.length; j++) {
        if (triplet[j] === target[j]) {
          exists[j] = true;
        }
      }
    }
  }
  return exists[0] && exists[1] && exists[2];
};
