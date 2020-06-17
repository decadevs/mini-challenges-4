const countIslands = grid => {

  // Destroy the islands
  const purgeIslandsFound = (i, j) => {
    // Base case
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == 0) {
      return;
    }
    // mark as visited or purger
    grid[i][j] = 0;

    // Recursive case for neighbours
    purgeIslandsFound(i - 1, j); //up
    purgIslandsFound(i + 1, j); //down
    purgeIslandsFound(i, j - 1); //left
    purgeIslandsFound(i, j + 1); //down
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
