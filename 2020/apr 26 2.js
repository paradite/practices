/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  if (cardPoints.length === 1) {
    return cardPoints[0];
  }
  let s = [0, cardPoints[0]];
  let e = [0, cardPoints[cardPoints.length - 1]];
  for (let i = 1; i < cardPoints.length; i++) {
    s.push(s[i] + cardPoints[i]);
    e.push(e[i] + cardPoints[cardPoints.length - 1 - i]);
  }
  // console.log('maxScore -> s', s);
  // console.log('maxScore -> e', e);
  let max = 0;
  for (let i = 0; i <= k; i++) {
    const total = s[i] + e[k - i];
    // console.log('maxScore -> total', total);
    if (total > max) {
      max = total;
    }
  }
  return max;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxScore([1, 1000, 1], 1));
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log(maxScore([1], 3));
console.log(maxScore([1], 1));
