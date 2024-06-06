function minimumPathSum(grid) {
  //  create new array for paths
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const p = new Array(rowSize).fill(0).map(() => new Array(colSize).fill(0));
  p[0][0] = grid[0][0];

  //  fill first row
  for (let colInd = 1; colInd < colSize; colInd++) {
    p[0][colInd] = p[0][colInd - 1] + grid[0][colInd];
  }

  //  fill first col
  for (let rowInd = 1; rowInd < rowSize; rowInd++) {
    p[rowInd][0] = p[rowInd - 1][0] + grid[rowInd][0];
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < colSize; j++) {
      p[i][j] = Math.min(p[i - 1][j], p[i][j - 1]) + grid[i][j];
    }
  }

  return p[rowSize - 1][colSize - 1];
}

console.log(
  minimumPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
