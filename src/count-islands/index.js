function countIslands(grid) {
  let rowLength,
      colLength,
      counter = 0;
  const visitedPoints = [];

const validateNextRowAndCol = (row, col) => {
    if(row > rowLength || row < 0){
      return false;
    }

    if(col < 0 || col > colLength){
      return false;
    }
    return true;
  }

const isPointVisited = (point) => {
  const [x, y] = point; 
  if(visitedPoints.length === 0) return false;
  for(let i = 0; i < visitedPoints.length; i++){
    let [row, col] = visitedPoints[i];
    if(x === row && y === col){
      return true
    }
  }
  return false
}


  const searchIsland = (location) => {
      if(!location){
        return true
      }
      visitedPoints.push(location);
      const nextPosition = null;
      const [row, col] = location;
      //crawl up
      if( validateNextRowAndCol(row - 1, col) 
      && !isPointVisited([row - 1, col], visitedPoints) 
      && grid[row-1][col] === 1 ){
        return searchIsland([row - 1, col]);
      }
      //crawl down
      if( validateNextRowAndCol(row + 1, col) 
      && !isPointVisited([row + 1, col]) 
      && grid[row + 1][col] === 1 ){
        return searchIsland([row + 1, col]);
      }
      //crawl rigth
      if( validateNextRowAndCol(row, col + 1) 
      && !isPointVisited([row, col + 1]) 
      && grid[row][col + 1] === 1 ){
        return searchIsland([row, col + 1]);
      }
      //crawl left
      if( validateNextRowAndCol(row, col - 1) 
      && !isPointVisited([row, col - 1]) 
      && grid[row][col - 1] === 1 ){
        return searchIsland([row, col -1]);
      }

      return searchIsland(nextPosition);
  }

  for(let row = 0; row < grid.length; row++){
    rowLength = grid.length -1 ;
    for(let col = 0; col < grid[row].length; col++){
      colLength = grid[row].length - 1;
      if(grid[row][col] === 1 && !isPointVisited([row,col])){
        let foundIsland = searchIsland([row, col]);
        if(foundIsland){
          counter ++
        } 
      }
    }
  }
  return counter;

};

 const grid = [
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    ];

  console.log(countIslands(grid));

module.exports = countIslands;
