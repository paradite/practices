/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  const queue = [0];
  const map = {};
  while (queue.length) {
    const index = queue.pop();
    if (map[index]) {
      continue;
    }
    // console.log('TCL ~ index', index);
    map[index] = true;
    if (index === s.length - 1) return true;
    for (let i = index + minJump; i <= index + maxJump; i++) {
      console.log('TCL ~ i', i);
      const element = s[i];
      if (element === '0' && !map[i]) {
        queue.push(i);
      }
    }
  }
  return false;
};

console.log(canReach('011010', 2, 3));
console.log(canReach('01101110', 2, 3));
console.log(canReach('01100011000111100', 2, 5));
