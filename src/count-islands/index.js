function countIslands(grid) {
  let queue = [];
  let visited = [];
  let numberOfIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1 && !visited.includes(row.toString() + col.toString())) {
        numberOfIslands++;
        queue.push([row, col]);
        visited.push(row.toString() + col.toString());
        while (queue.length) {
          let [nodeX, nodeY] = queue.shift();
          if (nodeX - 1 >= 0 && grid[nodeX - 1][nodeY] === 1 && !visited.includes((nodeX - 1).toString() + nodeY.toString())) {
            queue.push([nodeX - 1, nodeY]);
            visited.push((nodeX - 1).toString() + nodeY.toString());
          }
          if (nodeY - 1 >= 0 && grid[nodeX][nodeY - 1] === 1 && !visited.includes(nodeX.toString() + (nodeY - 1).toString())) {
            queue.push([nodeX, nodeY - 1]);
            visited.push(nodeX.toString() + (nodeY - 1).toString());
          }
          if (nodeX + 1 < grid.length && grid[nodeX + 1][nodeY] === 1 && !visited.includes((nodeX + 1).toString() + nodeY.toString())) {
            queue.push([nodeX + 1, nodeY]);
            visited.push((nodeX + 1).toString() + nodeY.toString());
          }
          if (nodeY + 1 < grid[0].length && grid[nodeX][nodeY + 1] === 1 && !visited.includes(nodeX.toString() + (nodeY + 1).toString())) {
            queue.push([nodeX, nodeY + 1]);
            visited.push(nodeX.toString() + (nodeY + 1).toString());
          }
        }
      }
    }
  }
  return numberOfIslands;
}

module.exports = countIslands;
