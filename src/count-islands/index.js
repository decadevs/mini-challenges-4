function countIslands(grid) {
  let nRows = grid.length;
  let nCols = grid[0].length;

  function deepFirstSearch(index_i, index_j) {
    //cases when x or y is out bound or our grid[index_i][index_y] is not a land then we do nothing
    if (
      index_i < 0 ||
      index_i > nRows - 1 ||
      index_j < 0 ||
      index_j > nCols - 1 ||
      grid[index_i][index_j] === 0
    ) {
      return;
    }

    //change the land to zero when visited
    grid[index_i][index_j] = 0;
    //visit the neigbouring land in four corner direction
    deepFirstSearch(index_i - 1, index_j); //Up
    deepFirstSearch(index_i, index_j - 1); //LEFT
    deepFirstSearch(index_i + 1, index_j); //Down
    deepFirstSearch(index_i, index_j + 1); //Right

  }

  let noOfIsland = 0;
  for (var i = 0; i < nRows; i++) {
    for (var j = 0; j < nCols; j++) {

      if (grid[i][j] == 1) {
        noOfIsland++;
        //Change the land and the neigbouring land connected to zero
        deepFirstSearch(i, j);
      }

    }
  }

  return noOfIsland;
}

module.exports = countIslands;
