const countIslands = grid => {

  // Destroy the islands
  const purgeIslandsFound = (row, col) => {
    // Base case
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] == 0) {
      return;
    }
    // mark as visited
    grid[row][col] = 0;

    // Recursive case for neighbours
    purgeIslandsFound(row - 1, col); //up
    purgeIslandsFound(row + 1, col); //down
    purgeIslandsFound(row, col - 1); //left
    purgeIslandsFound(row, col + 1); //down
  }

  // Check for islands in each grids
  let islands = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        islands++
        purgeIslandsFound(i, j)
      }
    }
  }
  return islands
}

module.exports = countIslands;
