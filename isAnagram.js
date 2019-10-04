/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    map[element] = map[element] ? map[element] + 1 : 1;
  }
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element = map[key];
      // console.log(key, element);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (map[element] >= 1) {
      map[element] = map[element] - 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('rat', 'rat'));
