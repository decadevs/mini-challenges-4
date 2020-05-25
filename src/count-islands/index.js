function countIslands(grid) {
  let cycles = 0;
  let visited = new Map();
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === 1  && !visited.has([row,column])) {
        cycles++;
        deptSearch(grid, row, column);
      }
    }
  }

  return cycles;

  function deptSearch(graph, valueX, valueY) {
    graph[valueX][valueY] = '_'  
    visited.set([valueX, valueY], "visited");
    
    if (valueX + 1 < graph.length) {
      //neigbour below
      if (graph[valueX + 1][valueY] === 1) {
        deptSearch(graph, valueX + 1, valueY);
      }
    }

    if (valueY + 1 < graph[valueX].length) {
      // right neigbour
      if (graph[valueX][valueY + 1] === 1) {
        deptSearch(graph, valueX, valueY + 1);
      }
    }

    if (valueY - 1 >= 0) {
      // left neigbour
      if (graph[valueX][valueY - 1] === 1) {
        deptSearch(graph, valueX, valueY - 1);
      }
    }

    if (valueX - 1 >= 0) {
      // top neigbour
      if (graph[valueX - 1][valueY] === 1) {
        deptSearch(graph, valueX - 1, valueY);
      }
    }

  }
}

module.exports = countIslands;
