/*
- use recursion method (method that calls itself)
- use depth first search

- create a variable to hold the count
- figure out the edge cases
  - if there are no islands then return 0;
- the first loop i will be used to keep track of the outer loop i.e. the rows
- the second loop j will be used to keep track of the inner loop i.e. the columns
- if the grid at any point has 1 it should increase the count;

- figure out how to keep track of the island
  - find an island we change it to 0 to mark as done? i.e. modifying
*/

function countIslands(grid) {
    let islandCount = 0;
    let rows = grid.length
    let columns = grid[0].length

    if (rows === 0) {
        return 0;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                checkIsland(i, j, grid)
                islandCount++;
                console.log(islandCount);

            }
        }
    }
    return islandCount;

    function checkIsland(i, j, grid) {
        if ((i < 0 || j < 0) || (i >= rows || j >= columns) || grid[i][j] !== 1) {
            return;
        }
        grid[i][j] = 0;

        checkIsland(i + 1, j, grid)
        checkIsland(i - 1, j, grid)
        checkIsland(i, j - 1, grid)
        checkIsland(i, j + 1, grid)
    }
};

module.exports = countIslands;