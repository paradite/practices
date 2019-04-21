// https://leetcode.com/contest/weekly-contest-128/problems/complement-of-base-10-integer/

var bitwiseComplement = function(N) {
  if (N === 0) {
    return 1;
  }
  for (var i = 0; i <= N; i++) {
    const max = 2 ** i - 1;
    if (max >= N) {
      return max - N;
    }
  }
};

console.log(bitwiseComplement(10));
