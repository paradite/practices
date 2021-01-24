/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let result = '';
  for (let i = 0; i < time.length; i++) {
    const element = time[i];
    if (element !== '?') {
      result = result + element;
    } else {
      if (i === 0) {
        if (Number(time[1]) > 3) {
          result = result + '1';
        } else {
          result = result + '2';
        }
      } else if (i === 1) {
        if (result[0] === '1' || result[0] === '0') {
          result = result + '9';
        } else {
          result = result + '3';
        }
      } else if (i === 3) {
        result = result + '5';
      } else {
        result = result + '9';
      }
    }
  }
  return result;
};
