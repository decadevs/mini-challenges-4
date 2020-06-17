function countIslands(grid) {
  const locateIsland = (grid, x, y, checked) => {
    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) return;

    if (checked[x][y] === true) return;

    checked[x][y] = true;
    if (grid[x][y] === 0) return;

    // @traversing the 2D Array
    locateIsland(grid, x - 1, y, checked);
    locateIsland(grid, x + 1, y, checked);
    locateIsland(grid, x, y - 1, checked);
    locateIsland(grid, x, y + 1, checked);
  };

  // @creation of boolean 2D Array of equal size with grid
  // to help keep track of the visited node
  let checked = [];
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    checked.push([]);
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!checked[x][y] && grid[x][y] === 1) {
        count++;
        locateIsland(grid, x, y, checked);
      }
      checked[x][y] = true;
    }
  }
  return count;
}

module.exports = countIslands;
