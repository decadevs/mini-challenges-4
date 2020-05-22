/*steps to count island
1. count island as you encounter unvisited land- 1
2. making sure to mark as visited every other 1's adjacent to the unvisited land recursively
3. return island count as number of island in the grid
*/

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
}

module.exports = countIslands;
