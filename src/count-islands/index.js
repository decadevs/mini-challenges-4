function countIslands(grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        islandCount += dfs(grid, i, j);
      }
    }
  }
  return islandCount;
}

let dfs = (grid, i, j) => {
  //boundary check
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] !== 1
  ) {
    return;
  }
  grid[i][j] = -1;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  return 1;
};
const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(countIslands(grid));

module.exports = countIslands;
