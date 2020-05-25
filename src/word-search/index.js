function wordSearch(words, word) {
  const wordLength = word.length;
  const wordArray = word.split("");
  let visited = [];
  let found = false;
  for (let row = 0; row < words.length; row++) {
    for (let column = 0; column < words[row].length; column++) {
      if (words[row][column] === wordArray[0]) {
        visited = [];
        deptSearch(words, row, column, 0);
      }
    }
  }
 
  return found;

  function deptSearch(graph, valueX, valueY, index) {
    //graph[valueX][valueY] = "_";

    if (!JSON.stringify(visited).includes([valueX, valueY])) {
      visited.push([valueX, valueY]);
    }

    if (index === wordLength - 1) {
      found = true;
      return;
    }

    if (valueX + 1 < graph.length) {
      //neigbour below
      if (
        graph[valueX + 1][valueY] === wordArray[index + 1] &&
        !JSON.stringify(visited).includes([valueX + 1, valueY])
      ) {
        deptSearch(graph, valueX + 1, valueY, index + 1);
      }
    }

    if (valueY + 1 < graph[valueX].length) {
      // right neigbour
      if (
        graph[valueX][valueY + 1] === wordArray[index + 1] &&
        !JSON.stringify(visited).includes([valueX, valueY + 1])
      ) {
        deptSearch(graph, valueX, valueY + 1, index + 1);
      }
    }

    if (valueY - 1 >= 0) {
      // left neigbour
      if (
        graph[valueX][valueY - 1] === wordArray[index + 1] &&
        !JSON.stringify(visited).includes([valueX, valueY - 1])
      ) {
        deptSearch(graph, valueX, valueY - 1, index + 1);
      }
    }

    if (valueX - 1 >= 0) {
      // top neigbour
      if (
        graph[valueX - 1][valueY] === wordArray[index + 1] &&
        !JSON.stringify(visited).includes([valueX - 1, valueY])
      ) {
        deptSearch(graph, valueX - 1, valueY, index + 1);
      }
    }
  }
  //
}
module.exports = wordSearch;
