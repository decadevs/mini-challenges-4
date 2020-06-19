function countIslands(grid) {
  if(grid === null || grid.length === 0) {
    throw TypeError('Invalid parameter given');
  }
  // const visited = [];
  // grid.map((row,y) => { let newRow = [];
  //   row.map((el,x) => newRow.push(false) );
  //   visited.push(newRow);
  // });

  let islandCounter = 0;

  for(let row = 0; row < grid.length; row++){
    for(let column = 0; column < grid[row].length; column++){
      if(grid[row][column] === 1){
        islandCounter += dfs(grid,row,column);
      }
    }
  }
return islandCounter;
  //END OF FUNCTION HERE
}

function dfs(grid,row,column){
  if(row<0 || row>grid.length-1 || column < 0 || column > grid[row].length-1){
    return;
  }
  if(grid[row][column] === 0) return;
  //Change current Value visited to ZERO
  grid[row][column] = 0;

  dfs(grid,row-1,column);
  dfs(grid,row+1,column);
  dfs(grid,row,column-1);
  dfs(grid,row,column+1);
  return 1;
}

// function getAdjacents(rowSize, columnSize, position /* [row, column] */) {
//   const [row, column] = position;
//
//   const topAdjacent = row === 0 ? false : [row - 1, column];
//   const rightAdjacent = column === columnSize ? false : [row, column + 1];
//   const bottomAdjacent = row === rowSize ? false : [row + 1, column];
//   const leftAdjacent = column === 0 ? false : [row, column -1]
//
//   return [topAdjacent, rightAdjacent, bottomAdjacent, leftAdjacent].filter(Boolean)
// }


module.exports = countIslands;
