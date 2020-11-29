/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let max = keysPressed[0];
  let maxLength = releaseTimes[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    let time = releaseTimes[i] - releaseTimes[i - 1];
    // console.log('slowestKey -> keysPressed[i]', keysPressed[i]);
    // console.log('slowestKey -> time', time);
    if (time > maxLength) {
      max = keysPressed[i];
      maxLength = time;
    } else if (time === maxLength && keysPressed[i] > max) {
      max = keysPressed[i];
      maxLength = time;
    }
  }
  return max;
};

console.log(slowestKey([9, 29, 49, 50], 'cbcd'));
console.log(slowestKey([9, 29, 49, 50, 70], 'cbcda'));
console.log(slowestKey([9, 29, 49, 50, 70], 'cbcda'));
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda'));
