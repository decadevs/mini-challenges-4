function wordSearch(words, word) {
  let wordArr;
  let wordsCopy;
  let pathFound = false;
  debugger;
  const rowLength = words.length;
  const colLength = words[0].length;

  const searchAdjacent = (currentRow, currentCol) => {
    //if current row/col is outside grid range or its value is not first letter of wordArr or its value is visited, end fn
    if (
      currentRow < 0 ||
      currentRow >= rowLength ||
      currentCol < 0 ||
      currentCol >= colLength ||
      wordsCopy[currentRow][currentCol] !== wordArr[0] ||
      wordsCopy[currentRow][currentCol] === "visited"
    ) {
      return;
    }
    const prevLetter = wordArr.shift();
    if (wordArr.length === 0) {
      pathFound = true;
    } else {
      pathFound = false;
    }
    //set current node val to visited so its not used more than once
    words[currentRow][currentCol] = "visited";
    //explore adjacent nodes to check if path to word exists
    searchAdjacent(currentRow - 1, currentCol);
    searchAdjacent(currentRow + 1, currentCol);
    searchAdjacent(currentRow, currentCol - 1);
    searchAdjacent(currentRow, currentCol + 1);
    if (pathFound === false) {
      wordArr.unshift(prevLetter);
    }
  };

  for (let row = 0; row < rowLength; row++) {
    wordArr = word.split(""); //create a fresh array for each row iteration
    wordsCopy = [...words]; //create a fresh copy for each row iteration
    for (let col = 0; col < colLength; col++) {
      if (wordsCopy[row][col] === wordArr[0]) {
        searchAdjacent(row, col);
      }
      if (pathFound === true) break;
    }
  }

  return pathFound;
}

module.exports = wordSearch;
