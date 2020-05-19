function countIslands(grid) {

  let markedIsland = function (grid, i, j, visited) {
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1) {
      return;
    }

    if (visited[i][j] === "#") {
      return;
    }

    visited[i][j] = "#";
    if(grid[i][j] === 0) {
      return;
    }

    let row = [-1,1,0,0];
    let col = [0,0,-1,1];
    for (let k = 0; k < row.length; k++) {
      markedIsland(grid, i + row[k], j + col[k], visited);
    }
  };

  let visited = [];
  for(let n = 0; n < grid.length; n++) {
    visited[n] = [];
  }
  let noOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        noOfIslands++;
        markedIsland(grid, i, j, visited);
      }
      visited[i][j] = "#";
    }
  }
  return noOfIslands;
}

module.exports = countIslands;
