const mapAdd = (map, key) => {
  if (map[key]) {
    map[key] = map[key] + 1;
  } else {
    map[key] = 1;
  }
};
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const map = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      mapAdd(map, char);
    }
  }
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const element = map[key];
      if (element % words.length !== 0) {
        return false;
      }
    }
  }
  return true;
};
