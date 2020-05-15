function countIslands(grid) {
  const island = [];
  let islandCount = 0;
  const toCheck = [];

  function checkNeighbours(row, col) {
    //top
    if (row > 0) {
      if (grid[row - 1][col] === 1) {
        if (!island.includes(`${[row - 1, col]}`)) {
          toCheck.push([row - 1, col]);
          island.push(`${[row - 1, col]}`);
        }
      }
    }
    //right
    if (col < grid[row].length - 1) {
      if (grid[row][col + 1] === 1) {
        if (!island.includes(`${[row, col + 1]}`)) {
          toCheck.push([row, col + 1]);
          island.push(`${[row, col + 1]}`);
        }
      }
    }
    //bottom
    if (row < grid.length - 1) {
      if (grid[row + 1][col] === 1) {
        if (!island.includes(`${[row + 1, col]}`)) {
          toCheck.push([row + 1, col]);
          island.push(`${[row + 1, col]}`);
        }
      }
    }
    //left
    if (col > 0) {
      if (grid[row][col - 1] === 1) {
        if (!island.includes(`${[row, col - 1]}`)) {
          toCheck.push([row, col - 1]);
          island.push(`${[row, col - 1]}`);
        }
      }
    }
  }

  function addNeighbours(row, col) {
    toCheck.push([row, col]);
    island.push(`${[row, col]}`);
    while (toCheck.length !== 0) {
      let temp = toCheck.shift();
      checkNeighbours(...temp);
    }
    ++islandCount;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        if (!island.includes(`${[row, col]}`)) {
          addNeighbours(row, col);
        }
      }
    }
  }
  return islandCount;
}

module.exports = countIslands;
