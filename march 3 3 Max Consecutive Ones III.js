// DP
// TODO: save previous answer

const computeSolution = function(A, solutionArr) {
  // for (var i = 0; i < solutionArr.length; i++) {
  //   A[solutionArr[i]] = 1;
  // }
  // console.log(solutionArr);
  const solutionMap = {};
  for (var i = 0; i < solutionArr.length; i++) {
    solutionMap[solutionArr[i]] = true;
  }
  let maxmax = 0;
  let max = 0;
  // console.log(A);
  // console.log(solutionMap);
  for (var i = 0; i < A.length; i++) {
    if (A[i] || solutionMap[i]) {
      max++;
    } else {
      max = 0;
    }
    // console.log(i, " - ", max);
    if (max > maxmax) {
      maxmax = max;
    }
  }
  return maxmax;
};

const generateNextSolution = function(A, old, j) {
  // console.log(old.ans);
  if (A[j] === 0 && !old.includes(j)) {
    // only ascending, reduce dups
    if (j > old[old.length - 1]) {
      const newSol = [...old, j];
      return newSol;
    }
  }
  return null;
};

const getNextArrs = function(A, solutionArrs) {
  // console.log(solutionArrs);
  let newSolutionArrs = [];
  for (var i = 0; i < solutionArrs.length; i++) {
    const solution = solutionArrs[i];
    for (var j = 0; j < A.length; j++) {
      const next = generateNextSolution(A, solution, j);
      if (next) {
        newSolutionArrs.push(next);
        // console.log(newSolutionArrs);
      }
    }
  }
  if (newSolutionArrs.length === 0) {
    return solutionArrs;
  }
  return newSolutionArrs;
};

var longestOnes = function(A, K) {
  let solutionArrs = [];
  // init solution arrs
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      solutionArrs.push([i]);
    }
  }
  // console.log(solutionArrs);
  let max = 0;
  let first = computeSolution(A, []);
  if (first > max) {
    max = first;
  }
  for (var i = 0; i < solutionArrs.length; i++) {
    const ans = computeSolution(A, solutionArrs[i]);
    if (ans > max) {
      max = ans;
    }
  }

  for (var i = 2; i <= K; i++) {
    // console.log(i);
    solutionArrs = getNextArrs(A, solutionArrs);
    console.log(solutionArrs);
    // console.log(solutionArrs.length);
  }
  for (var j = 0; j < solutionArrs.length; j++) {
    // console.log(solutionArrs);
    const localMax = computeSolution(A, solutionArrs[j]);
    if (localMax > max) {
      max = localMax;
    }
  }
  return max;
};

// console.log(longestOnes([1], 1));
// console.log(longestOnes([1], 0));
// console.log(longestOnes([1, 1], 0));
// console.log(longestOnes([1, 1], 2));
// console.log(longestOnes([0, 1], 2));
// console.log(longestOnes([0, 0], 2));
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
// console.log(longestOnes([1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 7));
// console.log(
//   longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
// );
// console.log(
//   longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 12)
// );
// console.log(longestOnes([1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1], 8));
// console.log(longestOnes([1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1], 144));
