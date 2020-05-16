function countIslands(grid) {
    if (!Array.isArray(grid)) {
        throw Error("Data object type should be an Array");
    }

    const ROW_LEN = grid.length;
    const COL_LEN = grid[0].length;
    let visited = [];
    let row;
    let col;
    let islandCount = 0;

    // Helper function
    function isArrayInArray(arr, item){
        let item_as_string = JSON.stringify(item);

        return arr.some(function(ele){
            return JSON.stringify(ele) === item_as_string;
        });
    }

    // Helper function
    function breathSearch(row, col, visited) {
        if ( grid[row][col] === 0 || isArrayInArray(visited, [row, col])) {
            return;
        }

        visited.push([row, col]);

        if (col + 1 < COL_LEN) {
            breathSearch(row, col + 1, visited);
        }

        if (col - 1 >= 0) {
            breathSearch(row, col - 1, visited);
        }

        if (row + 1 < ROW_LEN) {
            breathSearch(row + 1, col, visited);
        }

        if (row - 1 >= 0) {
            breathSearch(row - 1, col, visited);
        }
    }

    grid.forEach(function(array, i) {
         array.forEach(function(value, j) {
            if (grid[i][j] === 0 || isArrayInArray(visited, [i, j])) {
                return;
            }

            queue = [];
            breathSearch(i, j, visited, queue);
            islandCount++;
        });
    });
    return islandCount;
}

module.exports = countIslands;
