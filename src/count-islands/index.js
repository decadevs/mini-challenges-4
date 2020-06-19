function countIslands(grid) {
    let numberOfIsland = 0;
    const VISITED = [];
    //
    for(let i = 0; i < grid.length; ++i){
        VISITED.push([]);
    }
    for(let column = 0; column < grid.length; ++column) {
        for(let row = 0; row < grid[column].length; ++row)  {
            if(grid[column][row] === 1 && !VISITED[column][row]) {
                numberOfIsland++;
                checkVisitedStatus(grid, column, row, VISITED)
            }
        }
    }
    return numberOfIsland;
}

function checkVisitedStatus (graph, yAxis, xAxis, visited){
    if(yAxis < 0 || xAxis < 0 || yAxis > graph.length - 1 || xAxis > graph[yAxis].length - 1) return;
    if(graph[yAxis][xAxis] === 0) return;
    if(visited[yAxis][xAxis] === true) return;
    visited[yAxis][xAxis] = true;
    checkVisitedStatus(graph, yAxis - 1, xAxis, visited);
    checkVisitedStatus(graph, yAxis + 1, xAxis, visited);
    checkVisitedStatus(graph, yAxis, xAxis - 1, visited);
    checkVisitedStatus(graph, yAxis, xAxis + 1, visited);
}

module.exports = countIslands;
