function countIslands(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  let islands = 0;
  const search = (currentRow, currentCol) => {
    debugger;
    //check if row/column is outside grid range or not equal to 1
    if (
      currentRow < 0 ||
      currentRow >= rowLength ||
      currentCol < 0 ||
      currentCol >= colLength ||
      grid[currentRow][currentCol] !== 1
    ) {
      return;
    } else {
      //set node from 1 to visited to account for visited nodes
      grid[currentRow][currentCol] = "visited";
      //recursively check adjacent nodes(forming island) and rerun search function
      search(currentRow - 1, currentCol);
      search(currentRow + 1, currentCol);
      search(currentRow, currentCol - 1);
      search(currentRow, currentCol + 1);
    }
  };
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === 1) {
        search(row, col);
        islands++;
      }
    }
  }

  return islands;
}

module.exports = countIslands;
