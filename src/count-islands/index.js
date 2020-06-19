function countIslands(grid) {
  // if(grid.length === 0 || grid === null) {
  //   return 0
  // }

  let count = 0
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[row].length; col++) {
      debugger;
      if(grid[row][col] === 1) {
        count++
        search(grid, row, col)
      }
    }
  }
  return count

  function search(grid, row, col) {
    if(grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 0) return

    grid[row][col] = 0

    search(grid, row - 1, col)
    search(grid, row + 1, col)
    search(grid, row, col - 1)
    search(grid, row, col + 1)
  }
}

module.exports = countIslands;
