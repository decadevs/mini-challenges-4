const countIslands = (grid) => {
    let numOfRows = grid.length
    let numOfColumns = grid[0].length
    let number = 0;

    const scout = (i, j) => {
        if(i >= 0 && i < numOfRows && j >= 0 && j < numOfColumns && grid[i][j] === 1){
          grid[i][j] = '0'
          let successfulScout = scout(i-1,j) || scout(i+1,j) || scout(i,j-1) || scout(i,j+1)
          return successfulScout;
        }
    }
    
    for (let i = 0; i < numOfRows; i++) {
        for (let j = 0; j < grid[i].length; j++) {
  
            if(grid[i][j] === 1){
                scout(i, j);
                number++;
            }
        }
    }      
  
    return number;
}

module.exports = countIslands;
