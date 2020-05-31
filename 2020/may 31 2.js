/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  const mod = Math.pow(10, 9) + 7;
  horizontalCuts.push(0);
  verticalCuts.push(0);
  horizontalCuts.push(h);
  verticalCuts.push(w);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH = 0;
  let maxW = 0;
  for (let i = 1; i < horizontalCuts.length; i++) {
    const hdiff = horizontalCuts[i] - horizontalCuts[i - 1];
    if (hdiff > maxH) {
      maxH = hdiff;
    }
  }
  for (let i = 1; i < verticalCuts.length; i++) {
    const vdiff = verticalCuts[i] - verticalCuts[i - 1];
    if (vdiff > maxW) {
      maxW = vdiff;
    }
  }
  return (maxH * maxW) % mod;
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
