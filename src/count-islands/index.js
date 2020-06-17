function countIslands(grid) {
  let count = 0
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[row].length; col++) {
      if(!visited[row][col] && grid[row][col] === "1") {
        count++
        markIsland(grid, row, col)
      }
    }
  }
}

module.exports = countIslands;
