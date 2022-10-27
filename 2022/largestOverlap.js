/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  function copy(img) {
    return JSON.parse(JSON.stringify(img));
  }

  function moveX(img, x) {
    const newImg = [];
    for (let i = 0; i < img.length; i++) {
      const row = img[i];
      newImg[i] = [];
      for (let j = 0; j < row.length; j++) {
        newImg[i][j] = img[i][j - x] >= 0 ? img[i][j - x] : 0;
      }
    }
    return newImg;
  }

  function moveY(img, y) {
    const newImg = [];
    for (let i = 0; i < img.length; i++) {
      const row = img[i];
      newImg[i] = [];
      for (let j = 0; j < row.length; j++) {
        newImg[i][j] = img[i - y] && img[i - y][j] >= 0 ? img[i - y][j] : 0;
      }
    }
    return newImg;
  }

  function countOverlap(x, y) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
        const element = x[i][j];
        const element2 = y[i][j];
        if (element === element2 && element === 1) {
          count++;
        }
      }
    }
    return count;
  }

  let ans = 0;

  const xTranslated = [img1];
  let img1copy = copy(img1);
  for (let i = 1; i < img1[0].length; i++) {
    xTranslated.push(moveX(img1copy, i));
    xTranslated.push(moveX(img1copy, -i));
  }
  for (let i = 0; i < xTranslated.length; i++) {
    const trans = xTranslated[i];
    // console.log('TCL ~ trans', trans);
    for (let j = 0; j < img1.length; j++) {
      const yneg = moveY(trans, j);
      // console.log('TCL ~ yneg', yneg);
      const overlap = countOverlap(yneg, img2);
      ans = Math.max(ans, overlap);
      const ypos = moveY(trans, -j);
      // console.log('TCL ~ yneg', yneg);
      const overlap2 = countOverlap(ypos, img2);
      ans = Math.max(ans, overlap2);
    }
  }
  return ans;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    [
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);

console.log(largestOverlap([[1]], [[1]]));
console.log(largestOverlap([[0]], [[0]]));
console.log(
  largestOverlap(
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]
  )
);
