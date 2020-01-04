/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
  const validate = map => {
    let leftSum = 0;
    let rightSum = 0;
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const element = map[key];
        if (mapLeft[key]) {
          leftSum += mapLeft[key] * map[key];
        }
        if (mapRight[key]) {
          rightSum += mapRight[key] * map[key];
        }
      }
    }
    return leftSum === rightSum;
  };
  const arr = [];
  const map = {};
  const mapLeft = {};
  const mapRight = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (!map[char]) {
        map[char] = true;
        arr.push(char);
      } else {
        if (mapLeft[char]) {
          map[char] += Math.pow(10, word.length - 1 - j);
        } else {
          mapLeft[char] = Math.pow(10, word.length - 1 - j);
        }
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    const char = result[i];
    if (!map[char]) {
      map[char] = true;
      arr.push(char);
    } else {
      if (mapRight[char]) {
        mapRight[char] += Math.pow(10, result.length - 1 - i);
      } else {
        mapRight[char] = Math.pow(10, result.length - 1 - i);
      }
    }
  }
  // console.log('TCL: map', map);
  // console.log('TCL: mapRight', mapRight);
  // console.log('TCL: arr', arr);

  if (arr.length > 10) {
    return false;
  }
  let raw = '';
  for (let i = 0; i < arr.length; i++) {
    raw += '9';
  }
  raw = Number(raw);
  // console.log('TCL: raw', raw);
  for (let i = 0; i < raw; i++) {
    const newMap = {};
    let str = i + '';
    while (str.length < arr.length) {
      str = '0' + str;
    }
    const numMap = {};
    let dup = false;
    for (let j = 0; j < str.length; j++) {
      const element = str[j];
      if (numMap[element]) {
        dup = true;
      } else {
        numMap[element] = true;
      }
    }
    if (dup) {
      continue;
    }
    console.log('TCL: str', str);
    for (let j = 0; j < arr.length; j++) {
      const char = arr[j];
      newMap[char] = Number(str[j]);
    }
    if (validate(newMap)) {
      console.log('TCL: arr', arr);
      console.log('TCL: newMap', newMap);
      return true;
    }
    // console.log('TCL: map', map);
    // console.log('TCL: mapRight', mapRight);
  }
  return false;
};

// console.log(isSolvable(['SEND', 'MORE'], 'MONEY'));
console.log(isSolvable(['LEET', 'CODE'], 'POINT'));
