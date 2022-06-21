function countIslands(grid) {


    if (grid == "" || grid.length == 0) {
        return;
    }
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                marker(grid, i, j)
                counter++;

            }
        }
    }


    function marker(grid, i, j) {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1) {
            return;
        }

        if (grid[i][j] == 0) {
            return;
        }

        grid[i][j] = 0;

        marker(grid, i, j - 1);
        marker(grid, i, j + 1);
        marker(grid, i - 1, j);
        marker(grid, i + 1, j);

    }
    return counter;
}

module.exports = countIslands;