/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let tokens = [];
  let cur = '';
  let inside = false;
  let km = {};
  for (let i = 0; i < knowledge.length; i++) {
    const [key, value] = knowledge[i];
    km[key] = value;
  }
  for (let is = 0; is < s.length; is++) {
    const element = s[is];
    if (element === ')') {
      const value = km[cur];
      if (value) {
        tokens.push(value);
      } else {
        tokens.push('?');
      }
      inside = false;
    } else if (element === '(') {
      cur = '';
      inside = true;
    } else if (inside) {
      cur = cur + element;
    } else {
      tokens.push(element);
    }
  }
  return tokens.join('');
};
