/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let ans = 0;
  const tokens = sentence.split(' ');
  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];
    if (element === '') continue;
    if (element.match(/\d+/)) continue;
    if (element.match(/-{2,}/)) continue;
    if (element.split('-').length >= 3) continue;
    if (
      element.startsWith('-') ||
      element.endsWith('-') ||
      element.endsWith('-.') ||
      element.endsWith('-,') ||
      element.endsWith('-!')
    )
      continue;
    if (
      element.length >= 2 &&
      ((element.indexOf('.') !== -1 &&
        element.indexOf('.') !== element.length - 1) ||
        (element.indexOf('!') !== -1 &&
          element.indexOf('!') !== element.length - 1) ||
        (element.indexOf(',') !== -1 &&
          element.indexOf(',') !== element.length - 1))
    )
      continue;

    // console.log('TCL ~ element', element);
    ans++;
  }
  // console.log('TCL ~ ans', ans);
  return ans;
};
