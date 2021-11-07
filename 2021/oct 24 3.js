/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  const total = parents.length;
  // console.log('TCL ~ total', total);
  const leftMap = {};
  const rightMap = {};
  for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    if (leftMap[parent] >= 0) {
      rightMap[parent] = i;
    } else {
      leftMap[parent] = i;
    }
  }
  let max = 0;
  let maxCount = 0;

  const postVisit = (node) => {
    let left = 0;
    let right = 0;
    if (leftMap[node]) {
      left = postVisit(leftMap[node]);
    }

    if (rightMap[node]) {
      right = postVisit(rightMap[node]);
    }

    const up = total - left - right - 1;
    // console.log('TCL ~ node', node);
    // console.log('TCL ~ left', left);
    // console.log('TCL ~ right', right);
    // console.log('TCL ~ up', up);
    const product = (left || 1) * (right || 1) * (up || 1);
    // console.log('TCL ~ product', product);
    // console.log('TCL ~ node product', node, product);
    if (product > max) {
      max = product;
      maxCount = 1;
    } else if (product === max) {
      maxCount = maxCount + 1;
    }

    return left + right + 1;
  };
  postVisit(0);
  return maxCount;
};
