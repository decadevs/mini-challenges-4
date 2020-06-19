function countIslands(grid) {
  let noOfRows = grid.length, noOfCols = grid[0].length; // matrix dimentions

  let noOfIslands = 0;
  let visited = []; // grid of visited islands on the latest iterations
  let left = 0, // island on the left
    up = 0; // island on the right

  for (let row = 0; row < noOfRows; row++) {
    for (let col = 0; col < noOfCols; col++) {
      if (!grid[row][col]) {
        continue; // skip zero (water)
      }
      left = col > 0 ?
        grid[row][col - 1] :
        0;

      up = row > 0 ?
        grid[row - 1][col] :
        0;
      if (!left && !up) { // new island starts if there is water on the left and up
        noOfIslands++;
        grid[row][col] = noOfIslands; // give a number to island
      } else if (left && up && left !== up) { //upper island is not seperate
        grid[row][col] = left;
        visited.push(up)
      } else if (left) {
        grid[row][col] = left; // island continues previous island to the right
      } else if (up) {
        grid[row][col] = up; // island continues previous island
      }
    }
  }
  return noOfIslands - visited.length;
}

module.exports = countIslands;
