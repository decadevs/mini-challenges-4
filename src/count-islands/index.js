function countIslands(grid) {
  if (grid.length === 0 || grid === null) {
    return 0
  };

  let islandCounter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      if (grid[row][col] === 1) {
        islandCounter++;

        checkingForIsland(grid, row, col)
      }
    }
  };
  return islandCounter
  };


  function checkingForIsland(grid, row, col) {

    if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 0) {
      return 0;
    };

    grid[row][col] = 0;

    checkingForIsland(grid, row + 1, col)
    checkingForIsland(grid, row - 1, col)
    checkingForIsland(grid, row, col + 1)
    checkingForIsland(grid, row, col - 1)

    return;
}

module.exports = countIslands;


