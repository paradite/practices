/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const maps = [];
  for (var i = 0; i < A.length; i++) {
    maps.push({});
    const word = A[i];
    for (var j = 0; j < word.length; j++) {
      const letter = word[j];
      maps[i][letter] = maps[i][letter] ? maps[i][letter] + 1 : 1;
    }
  }
  // console.log(maps);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const answer = [];
  for (var i = 0; i < letters.length; i++) {
    const letter = letters[i];
    let num = null;
    for (var j = 0; j < maps.length; j++) {
      if (maps[j][letter]) {
        if (num === null) {
          num = maps[j][letter];
        } else if (maps[j][letter] < num) {
          num = maps[j][letter];
        }
      } else {
        num = null;
        break;
      }
    }
    if (num) {
      for (var k = 0; k < num; k++) {
        answer.push(letter);
      }
    }
  }
  return answer;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
console.log(commonChars(["a", "b", "c"]));
console.log(commonChars(["aac", "aab"]));
