function countIslands(grid) {
    if (!Array.isArray(grid)) {
        throw Error("Data object type should be an Array");
    }

    const ROW_LEN = grid.length;
    const COL_LEN = grid[0].length;
    let visited = [];
    let queue = [];
    let index;
    let currentIndex;
    let islandCount = 0;

    // Helper function
    function isArrayInArray(arr, item){
        let item_as_string = JSON.stringify(item);

        return arr.some(function(ele){
            return JSON.stringify(ele) === item_as_string;
        });
    }

    grid.forEach(function(array, i) {
         array.forEach(function(value, j) {
            index = [i, j];
            if (grid[i][j] === 0 || isArrayInArray(visited, index)) {
                return;
            }

            visited.push(index);
            queue.push(index);
            while (queue.length > 0) {
                currentIndex = queue[0];
                if ((currentIndex[1] + 1) < COL_LEN) {
                    index = [currentIndex[0], currentIndex[1] + 1];
                    if ((grid[currentIndex[0]][currentIndex[1] + 1] === 1) && !(isArrayInArray(visited, index))) {
                        visited.push(index);
                        queue.push(index);
                    }
                }

                if ((currentIndex[1] - 1) >= 0) {
                    index = [currentIndex[0], currentIndex[1] - 1];
                    if ((grid[currentIndex[0]][currentIndex[1] - 1] === 1) && !(isArrayInArray(visited, index))) {
                        visited.push(index);
                        queue.push(index);
                    }
                }

                if ((currentIndex[0] + 1) < ROW_LEN) {
                    index = [currentIndex[0] + 1, currentIndex[1]];
                    if ((grid[currentIndex[0] + 1][currentIndex[1]] === 1) && !(isArrayInArray(visited, index))) {
                        visited.push(index);
                        queue.push(index);
                    }
                }

                if ((currentIndex[0] - 1) >= 0) {
                    index = [currentIndex[0] - 1, currentIndex[1]];
                    if ((grid[currentIndex[0] - 1][currentIndex[1]] === 1) && !(isArrayInArray(visited, index))) {
                        visited.push(index);
                        queue.push(index);
                    }
                }
                queue.shift();
            }
            islandCount++;
        });
    });
    return islandCount;
}

module.exports = countIslands;
