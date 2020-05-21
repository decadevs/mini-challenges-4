function countIslands(grid) {
    let adjacents = [];
    let adjacentArr = []
    let queue = []
    let count = 0
    //  Generate a grid of adjacent positions of each position
    for (let row = 0; row < grid.length; row++){
        let rowAdjacentArr = []
        for (let column = 0; column < grid[row].length; column++){
            adjacents = adjacent(grid.length, grid[row].length, [row, column]);
            rowAdjacentArr.push(adjacents)
        }
        adjacentArr.push(rowAdjacentArr)
    }
    let visited = []
    //  Count islands
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            //  Discover island
            if (grid[i][j] === 1 && isVisited([i,j], visited) === false){
                queue.push([i,j])
                const island = BFS(adjacentArr[i][j], adjacentArr, queue, grid, visited)
                count += island;
            }
        }
    }
    return count;
}
//  Function to fetch the adjacent positions of a position in the grid
function adjacent(rowLength, columnLength, position){
    const top = position[0]===0 ? false : [position[0]-1, position[1]]
    const bottom = position[0]===rowLength ? false : [position[0]+1, position[1]]
    const right = position[1]===columnLength ? false : [position[0], position[1]+1]
    const left = position[1]===0 ? false : [position[0], position[1]-1]
    
    return [top, right, bottom, left].filter(Boolean);
}
//  Breadth First Search function
function BFS(adjacentArr, allAdjacents, queue, grid, visited){
    //  Queue up the adjacent positions of the current one being treated
    for (const position of adjacentArr){
        if (position[0] < grid.length && position[1] < grid[0].length){
            if (grid[position[0]][position[1]] === 1 && isVisited(position, visited) === false && isVisited(position, queue) === false){
                queue.push(position)
            }
        }
    }
    //  Update visited positions and remove the position you have attended to from the queue
    visited.push(queue[0])
    queue.shift()
    //  Termination point of the recursive BFS function
    if (queue.length === 0){
        return 1
    }
    //  Update adjacent positions to those of the next position in the queue
    adjacentArr = allAdjacents[queue[0][0]][queue[0][1]]
    
    let result = BFS(adjacentArr, allAdjacents, queue, grid, visited)
    return result;
}
//  Function to check if a position has been visited
function isVisited(position, visitedPositions){
    for (const spot of visitedPositions){
        if (spot.toString() === position.toString())
            return true
    }
    return false
}

module.exports = countIslands;

console.log(countIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]));