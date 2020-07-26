/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  const compress = (s) => {
    let news = s[0];
    let prev = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
      const element = s[i];
      if (element === prev) {
        count++;
      } else {
        if (count > 1) {
          news = news + '' + count;
        }
        news = news + element;
        count = 1;
      }
      prev = element;
    }
    if (count > 1) {
      news = news + '' + count;
    }
    // console.log('compress -> news', news);
    return news.length;
  };

  const removeChar = (s) => {
    let map = {};
    let prev = s[0];
    let count = 1;
    let min = Infinity;
    let i = 1;
    for (; i < s.length; i++) {
      const element = s[i];
      if (element === prev) {
        count++;
      } else {
        if (map[count]) {
          map[count].push(i - count);
        } else {
          map[count] = [i - count];
        }
        if (count < min) {
          min = count;
        }
        count = 1;
      }
      prev = element;
    }
    if (map[count]) {
      map[count].push(i - count);
    } else {
      map[count] = [i - count];
    }
    if (count < min) {
      min = count;
    }
    // console.log('removeChar -> map', map);
    // console.log('removeChar -> min', min);
    const pos = map[min][0];
    // console.log('removeChar -> pos', pos);
    let news = s.split('');
    news.splice(pos, 1);
    return news.join('');
  };

  while (k) {
    // console.log('getLengthOfOptimalCompression -> s', s);
    s = removeChar(s);
    k--;
  }
  return compress(s);
};

console.log(getLengthOfOptimalCompression('aaabcccd', 2));
