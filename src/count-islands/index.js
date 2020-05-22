<<<<<<< HEAD
/*steps to count island
1. count island as you encounter unvisited land- 1
2. making sure to mark as visited every other 1's adjacent to the unvisited land recursively
3. return island count as number of island in the grid
*/

function countIslands(grid) {
  let gridLength = grid.length;
  let gridItemLength = grid[0].length;
  let islandCount = 0;

  if(gridLength===0){
      return 0
  }

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridItemLength; j++) {
      if (grid[i][j] === 1) {
        //count the island and begin visit of positive neighbour adjacents to mark as visited
        islandCount += 1;
        VisitNeighbourAdjacents(grid, i, j);
        
      }
    }
  }

  return islandCount;
}

function VisitNeighbourAdjacents(grid, row, col) {
  let gridL = grid.length;
  let gridIL=grid[0].length;
  if (
    row===-1 ||
    row >= gridL ||
    col ===-1 ||
    col >= gridIL ||
    grid[row][col] !==1
  ) {
    return
  }

  grid[row][col] = 0;


  VisitNeighbourAdjacents(grid,row,col+1); //move to right adjacent neighbour
  VisitNeighbourAdjacents(grid,row+1,col); //move to bottom adjacent neighbour
  VisitNeighbourAdjacents(grid,row-1,col);// move to top adjacent neightbour
  VisitNeighbourAdjacents(grid,row,col-1) //move to left adjacent neighbour


  

   //move to right adjacent neighbour
=======
function countIslands(grid) {
  if (grid.length === 0 || grid === null) {
    return 0
  };

  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      if (grid[row][col] === 1) {
        islandCount++;

        visitedIsland(grid, row, col)
      }
    }
  };
  return islandCount
  };


  function visitedIsland(grid, row, col) {

    if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 0) {
      return 0;
    };

    grid[row][col] = 0;

    visitedIsland(grid, row + 1, col)
    visitedIsland(grid, row - 1, col)
    visitedIsland(grid, row, col + 1)
    visitedIsland(grid, row, col - 1)

    return;
>>>>>>> 00ac488c8e250b380ba2a01d652a4faa0db2f2f9
}

module.exports = countIslands;
