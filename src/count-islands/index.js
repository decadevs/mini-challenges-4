function countIslands(grid) {
  let islands = 0;

  let width = grid.length;

  let height = grid[0].length;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] == "1") {
        depthFirstSearch(grid, i, j);
        islands++;
      }
    }
  }
  return islands;

  function depthFirstSearch(grid, i, j) {
    let width = grid.length;

    let height = grid[0].length;

    if (i >= 0 && i < width && j >= 0 && j < height && grid[i][j] == "1") {
      grid[i][j] = "0";

      depthFirstSearch(grid, i + 1, j);

      depthFirstSearch(grid, i, j + 1);

      depthFirstSearch(grid, i - 1, j);

      depthFirstSearch(grid, i, j - 1);
    }
  }
}

module.exports = countIslands;
