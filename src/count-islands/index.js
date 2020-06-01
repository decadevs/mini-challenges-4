function traverseMaze(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] != 1
  ) {
    return;
  }
  grid[i][j] = "🏃";

  traverseMaze(grid, i, j + 1);
  traverseMaze(grid, i, j - 1);
  traverseMaze(grid, i + 1, j);
  traverseMaze(grid, i - 1, j);

  return true;
}
function countIslands(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && traverseMaze(grid, i, j)) {
        count++;
      }
    }
  }
  return count;
}

module.exports = countIslands;
