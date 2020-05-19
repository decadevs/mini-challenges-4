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
        if (col >= COL_LEN || col < 0 || row >= ROW_LEN || row < 0 || grid[row][col] === 0 || isArrayInArray(visited, [row, col])) {
            return;
        }

        visited.push([row, col]);

        breathSearch(row, col + 1, visited);

        breathSearch(row, col - 1, visited);

        breathSearch(row + 1, col, visited);

        breathSearch(row - 1, col, visited);
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
