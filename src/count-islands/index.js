function countIslands(grid) {
  const width = grid.length
  const len = grid[0].length
  let count = 0;

  function search (i, j) {
      if(i >= 0 && i < width && j >= 0 && j < len && grid[i][j] === 1){
          grid[i][j] = '0'
          const searchFound = search(i-1,j) || search(i+1,j) || search(i,j-1) || search(i,j+1)
          return searchFound;
      }
  }

  for (let i = 0; i < width; i++) {
      for (let j = 0; j < grid[0].length; j++) {

          if(grid[i][j] === 1){
              search(i, j);
              count++;
          }
      }
  }

  return count;
}

module.exports = countIslands;
