function wordSearch(words, word) {
  word = word.split("");
  const indexes = [];

  for (let row = 0; row < words.length; row++) {
    words[row].forEach((letter, col) => {
      if (letter === word[0]) {
        indexes.push([row, col]);
      }
    });
  }

  if (indexes.length === 0) {
    return false;
  }

  let search = 0;
  const visited = [];
  let status = false;

  function checkNeighbours(row, col, searchIndex) {
    const adjList = [];
    //top
    if (row > 0) {
      if (words[row - 1][col] === word[searchIndex]) {
        if (!visited.includes(`${[row - 1, col]}`)) {
          adjList.push([row - 1, col]);
        }
      }
    }
    //right
    if (col < words[row].length - 1) {
      if (words[row][col + 1] === word[searchIndex]) {
        if (!visited.includes(`${[row, col + 1]}`)) {
          adjList.push([row, col + 1]);
        }
      }
    }
    //bottom
    if (row < words.length - 1) {
      if (words[row + 1][col] === word[searchIndex]) {
        if (!visited.includes(`${[row + 1, col]}`)) {
          adjList.push([row + 1, col]);
        }
      }
    }
    //left
    if (col > 0) {
      if (words[row][col - 1] === word[searchIndex]) {
        if (!visited.includes(`${[row, col - 1]}`)) {
          adjList.push([row, col - 1]);
        }
      }
    }
    return adjList;
  }
  
  function find(arr) {
	let searchIndex = ++search;
    while (!status && arr.length !== 0) {
      let temp = arr.shift();
      visited.push(`${temp}`);
      if (visited.length === word.length) {
        status = true;
        break;
      }
      let diffArr = checkNeighbours(...temp, searchIndex);
      if (diffArr.length === 0) {
		visited.pop();
        continue;
      }
      find(diffArr);
    }
  }
  find(indexes);
  return status;
}

module.exports = wordSearch;
