function countIslands(grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        islandCount += 1;
        dfs(grid, i, j);
      }
    }
  }
  return islandCount;
}

let dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == 0
  ) {
    return;
  }
  grid[i][j] = 0;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};
const grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
console.log(countIslands(grid));

module.exports = countIslands;
