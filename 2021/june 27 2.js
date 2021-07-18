/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const width = grid[0].length;
  const height = grid.length;
  const layerMap = [];
  const layerNumbers = [];
  const layers = Math.min(width / 2, height / 2);
  // console.log('TCL ~ layers', layers);
  const visited = {};
  for (let i = layers - 1; i >= 0; i--) {
    const map = [];
    const numbers = [];
    const wStart = i;
    const wEnd = width - 1 - i;
    const hStart = i;
    const hEnd = height - 1 - i;
    let count = 0;
    let j = hStart;
    let k;
    for (k = wStart; k < wEnd; k++) {
      if (visited[`${j}-${k}`]) continue;
      visited[`${j}-${k}`] = true;
      map[count] = [j, k];
      numbers.push(grid[j][k]);
      count++;
    }
    k = wEnd;
    for (j = hStart; j < hEnd; j++) {
      if (visited[`${j}-${k}`]) continue;
      visited[`${j}-${k}`] = true;
      map[count] = [j, k];
      numbers.push(grid[j][k]);
      count++;
    }
    j = hEnd;
    for (k = wEnd; k > wStart; k--) {
      if (visited[`${j}-${k}`]) continue;
      visited[`${j}-${k}`] = true;
      map[count] = [j, k];
      numbers.push(grid[j][k]);
      count++;
    }
    k = wStart;
    for (j = hEnd; j > hStart; j--) {
      if (visited[`${j}-${k}`]) continue;
      visited[`${j}-${k}`] = true;
      map[count] = [j, k];
      numbers.push(grid[j][k]);
      count++;
    }
    // for (let j = hStart; j <= hEnd; j++) {
    //   for (let k = wStart; k <= wEnd; k++) {
    //     if (visited[`${j}-${k}`]) continue;
    //     visited[`${j}-${k}`] = true;
    //     map[count] = [j, k];
    //     numbers.push(grid[j][k]);
    //     count++;
    //   }
    // }
    layerMap.push(map);
    layerNumbers.push(numbers);
  }
  const newGrid = grid;
  for (let i = 0; i < layers; i++) {
    const map = layerMap[i];
    const numbers = layerNumbers[i];
    const length = numbers.length;
    const ops = k % length;
    const numbersDu = [...numbers, ...numbers];
    const newNumbers = numbersDu.slice(ops, ops + length);
    for (let j = 0; j < map.length; j++) {
      const [row, col] = map[j];
      newGrid[row][col] = newNumbers[j];
    }
  }
  // console.log('TCL ~ layerMap', layerMap);
  // console.log('TCL ~ layerNumbers', layerNumbers);
  return newGrid;
};

console.log(
  rotateGrid(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);

console.log(
  rotateGrid(
    [
      [4, 5, 8, 9, 4, 2, 4, 7, 2, 4],
      [7, 1, 9, 6, 6, 1, 4, 5, 7, 7],
      [7, 1, 5, 1, 1, 7, 10, 1, 3, 1],
      [7, 2, 2, 5, 2, 6, 6, 4, 7, 7],
      [1, 2, 3, 8, 4, 7, 6, 9, 6, 2],
      [5, 10, 3, 4, 7, 2, 7, 5, 3, 10],
    ],
    4
  )
);

// [[4,2,4,7,2,4,7,1,7,2],[9,4,5,7,3,1,7,6,9,10],[8,6,6,2,10,6,2,5,6,3],[5,6,4,7,1,5,1,1,7,5],[4,9,1,1,4,2,2,3,8,7],[7,7,7,1,5,10,3,4,7,2]]
// [[4,2,4,7,2,4,7,1,7,2],[9,1,4,5,7,3,7,6,9,10],[8,6,10,1,4,6,6,2,6,3],[5,6,7,1,1,5,2,5,7,5],[4,9,1,1,2,2,3,8,4,7],[7,7,7,1,5,10,3,4,7,2]]
// [[4,2,4,7,2,4,7,1,7,2],[9,1,4,5,7,3,7,6,9,10],[8,6,10,1,4,6,6,2,6,3],[5,6,7,1,1,5,2,5,7,5],[4,9,1,1,2,2,3,8,4,7],[7,7,7,1,5,10,3,4,7,2]]
