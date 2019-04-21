// https://leetcode.com/contest/weekly-contest-128/problems/capacity-to-ship-packages-within-d-days/

var shipWithinDays = function(weights, D) {
  let total = 0;
  let maxSingle = 0;
  for (var i = weights.length - 1; i >= 0; i--) {
    total = total + weights[i];
    if (weights[i] > maxSingle) {
      maxSingle = weights[i];
    }
  }
  let min = maxSingle;
  let max = total;
  return findSize(weights, D, min, max);
};

const findSize = function(weights, D, start, end) {
  let mid = parseInt((start + end) / 2);
  let can = canShip(weights, D, mid);
  // console.log(D, mid, start, end, can);
  if (can) {
    if (mid === start) {
      return mid;
    }
    return findSize(weights, D, start, mid);
  } else {
    if (mid === parseInt((mid + 1 + end) / 2)) {
      // console.log('dead', mid, end);
      return end;
    }
    return findSize(weights, D, mid + 1, end);
  }
};

const canShip = function(weights, D, size) {
  let cursor = 0;
  for (var i = 0; i < D; i++) {
    let currentWeight = 0;
    while (cursor <= weights.length - 1) {
      let current = weights[cursor];
      currentWeight = currentWeight + current;
      if (currentWeight > size) {
        break;
      }
      cursor = cursor + 1;
    }
  }
  if (cursor === weights.length) {
    return true;
  }
  return false;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
