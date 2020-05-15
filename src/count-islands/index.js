function countIslands(grid) {
  let queue = [];
  let count = 0;
  let item
    while (grid.length === 1) {
    grid = grid[0];
  }
  for (let i = 0; i < grid.length; i += 1) {
    if (Array.isArray(grid[i])) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === 1) {
          count += 1;
          queue.push([i, j]);
          while (queue.length !== 0) {
            item = queue[0]
            if(grid[item[0] - 1] !== undefined) {
              if (grid[item[0]-1][item[1]] === 1) {
                queue.push([item[0]-1, item[1]])
              }
            }
            if(grid[item[0] + 1] !== undefined){
              if (grid[item[0]+1][item[1]] === 1) {
                queue.push([item[0]+1, item[1]])
              }
            }
            if(grid[item[0]][item[1] - 1] === 1) {
              queue.push([item[0], item[1] - 1])
            }
            if(grid[item[0]][item[1] + 1] === 1) {
              queue.push([item[0], item[1] + 1])
            }
            queue.shift()
            grid[item[0]][item[1]] = 0
          }
        }
      }
    } else {
      if (grid[i] === 1 && grid[i - 1] !== 1) {
        count += 1;
      }
    }
  }
  return count;
}



module.exports = countIslands;
