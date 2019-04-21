// https://leetcode.com/contest/weekly-contest-128/problems/pairs-of-songs-with-total-durations-divisible-by-60/

var numPairsDivisibleBy60 = function(time) {
  const map = {};
  let result = 0;
  for (var i = 0; i < time.length; i++) {
    let remainder = time[i] % 60;
    if (remainder === 0) {
      remainder = 60;
    }
    if (map[remainder]) {
      map[remainder] = map[remainder] + 1;
    } else {
      map[remainder] = 1;
    }
  }
  for (var i = 0; i < 30; i++) {
    if (map[i] && map[60 - i]) {
      result = result + map[i] * map[60 - i];
    }
  }
  let result30 = 0;
  if (map[30]) {
    for (var i = map[30]; i >= 1; i--) {
      result30 = result30 + (i - 1);
    }
  }
  let result60 = 0;
  if (map[60]) {
    for (var i = map[60]; i >= 1; i--) {
      result60 = result60 + (i - 1);
    }
  }
  result = result + result30 + result60;
  return result;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));
