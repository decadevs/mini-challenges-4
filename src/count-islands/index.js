function countIslands(grid) {
  let count = 0;
  let flag = 0
  let colMatch = []

  grid.forEach((element, rootIndex) => {
    let colIndexes = []
    element.forEach((item, childIndex) => {
      if (item == 1 && item !== element[childIndex - 1]) {
        count++
        colIndexes.push(childIndex)
        if (flag > 0 && item === grid[rootIndex - 1][childIndex]) {
          count--
        }
      }
    })
    flag++
    colMatch = colIndexes;
  });
  return count;
}

module.exports = countIslands;
