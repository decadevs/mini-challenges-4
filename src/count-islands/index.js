function countIslands(grid) 
{
    //check to ensure a valid array was entered
    if (!Array.isArray(grid))
    {
        return;
    }

    //function variable to keep track of neigbouring lands(1's) with respect to the current land(1)
    let searchIslands = function (islandArray, row, col, track)
    {
        //perform the underly check to ensure the operation is valid
        if (row < 0 || row > islandArray.length - 1 || col < 0 || col > islandArray[row].length - 1)
        {
            return false;
        }
        
        //if the index has been tracked before, dont continue
        if (track[row][col])
        {
            return false;
        }
        //if index has not been tracked, set the value to true now that it is on track
        track[row][col] = true; 
        
        //if the item been tracked is not a land, discontinue the operation
        if (islandArray[row][col] !== 1)
        {
            return false;
        }

        //tranverse the adjacent elements to the element with the current index
        //recursively via vertical and horizontal direction. 
        searchIslands(islandArray, row - 1, col, track);
        searchIslands(islandArray, row + 1, col, track);
        searchIslands(islandArray, row, col - 1, track);
        searchIslands(islandArray, row, col + 1, track);
    }

    let countOfIslands = 0;
    let gridLength = grid.length;
    //initialize boolean array with thesame dimension as the input array and pre-populate 
    //it with false values to keep track of all lands pending when it will be visited 
    let keepTrack = new Array(gridLength).fill([]).map((item, index) => 
                    new Array(grid[index]).fill(false));
    
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === 1 && !keepTrack[i][j])
            {
                countOfIslands++
                //perform a deep search for neighbouring lands(1's) demacated with water(0's)
                searchIslands(grid, i, j, keepTrack);
            }
            keepTrack[i][j] = true;
        }
    }

    return countOfIslands;
}

module.exports = countIslands;
