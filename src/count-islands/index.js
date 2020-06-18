function countIslands(grid) {
    
    if( grid === null || grid.length === 0){
        return 0;
    }

    let numberOfIsland = 0;
    for(let i = 0; i < grid.length; i++ ){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                numberOfIsland += getCountOfIsland(grid, i, j);
            }
        }
    }
    return numberOfIsland;
}

let getCountOfIsland = (grid, i, j) => {
     if(i < 0 || i >= grid.length || j < 0 ||  j >= grid[i].length || grid[i][j] === 0){
        return 0;
    }
    
    grid[i][j] = 0;

    getCountOfIsland(grid, i + 1, j);
    getCountOfIsland(grid, i - 1, j);
    getCountOfIsland(grid, i , j + 1);
    getCountOfIsland(grid, i , j - 1);

    return 1;
}

module.exports = countIslands;
