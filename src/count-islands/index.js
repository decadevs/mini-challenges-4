function countIslands(grid) {
  let search = function(grid, row, col) {
    if(grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 0) {
      return 0
    }

    grid[row][col] = 0

    search(grid, row - 1, col)
    search(grid, row + 1, col)
    search(grid, row, col - 1)
    search(grid, row, col + 1)

    return
  }

  if(grid.length === 0 || grid === null) {
    return 0
  }

  let count = 0
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[row].length; col++) {
      if(grid[row][col] === 1) {
        count++
        search(grid, row, col)
      }
    }
  }
  return count
}

module.exports = countIslands;
