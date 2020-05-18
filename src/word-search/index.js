function wordSearch(words, word) {
    const wordLength = word.length;
    const characterSearched = [];
    const wordArray = word.split("");
    let visited = new Map();
    let count = 0  
    for (let row = 0; row < words.length; row++) {
      for (let column = 0; column < words[row].length; column++) {
        if (words[row][column] === wordArray[0]) {
          console.log(wordArray[0]);
          let char = wordArray[0]
          wordArray.shift();
          deptSearch(words, row, column);
         
      }
      }
    }
   return count === wordLength ? true : false
    
  
    function deptSearch(graph, valueX, valueY) {
      graph[valueX][valueY] = '_'  
      visited.set([valueX, valueY], "visited");
      count++
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

module.exports = wordSearch;
