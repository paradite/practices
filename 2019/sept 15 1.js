/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let map = {
    b: 0
  };
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    map[char] = map[char] ? map[char] + 1 : 1;
  }
  const target = 'balloon';
  let ans = map['b'];
  for (let index = 0; index < target.length; index++) {
    const char = target[index];
    if (char === 'o' || char === 'l') {
      if (Math.floor(map[char] / 2) < ans) {
        ans = Math.floor(map[char] / 2);
      }
    } else {
      if (map[char] < ans) {
        ans = map[char];
      }
    }
  }
  // console.log(map);
  return ans;
};

console.log(maxNumberOfBalloons('nlaebolko'));
console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('leetcode'));
console.log(maxNumberOfBalloons('balon'));
