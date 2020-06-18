//The helping function helps to turn the surrounding of every island to lowland
function countIslands(grid) {
  let count = 0;
  //Locate each island and pass it position into the helping function
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        markSpot(grid, i, j);
      }
    }
  }
  return count;
}

//The helping function helps to turn the surrounding of every island to lowland
function markSpot(grid, rowIndex, colIndex) {
  //This ensures that the search is withing the grid
  if (!grid[rowIndex] || !grid[rowIndex][colIndex]) {
    return;
  }

  if (grid[rowIndex][colIndex] === 0) { //Identify any lowland and then skip it
    return;
  }

  grid[rowIndex][colIndex] = 0;  //Turns the present island to low

  let row = [-1,1,0,0];     //Increments of the adjacent rows and columns
  let col = [0,0,-1,1];
  for (let i = 0; i < row.length; i++) {
    markSpot(grid, rowIndex + row[i], colIndex + col[i]); //Marks adjacent island with this recursion
  }
}

module.exports = countIslands;
