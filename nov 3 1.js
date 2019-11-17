/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let ans = 0;
  let xyCount = 0;
  let yxCount = 0;
  for (let i = 0; i < s1.length; i++) {
    const element1 = s1[i];
    const element2 = s2[i];
    if (element1 === 'x' && element2 === 'y') {
      xyCount++;
    } else if (element1 === 'y' && element2 === 'x') {
      yxCount++;
    }
  }
  if ((xyCount + yxCount) % 2 !== 0) {
    return -1;
  }
  if (xyCount % 2 === 0) {
    return (xyCount + yxCount) / 2;
  } else {
    ans += Math.floor(xyCount / 2);
    ans += Math.floor(yxCount / 2);
    ans += 2;
    return ans;
  }
};

console.log(minimumSwap('x', 'x'));
console.log(minimumSwap('x', 'y'));
console.log(minimumSwap('xx', 'yy'));
console.log(minimumSwap('xy', 'yx'));
console.log(minimumSwap('xx', 'yx'));
console.log(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx'));

// xxyyxyxyxx
// xyyxyxxxyx

// xyyyxyxyxx
// xyyxxxxxyx

// xyyxxyxyxx
// xyyxxxxyyx

// xyyxxyxyyx
// xyyxxxxyxx

// xyyxxyxyxx
// xyyxxyxyxx

// yxxy
// xyyx
