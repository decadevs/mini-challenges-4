function wordSearch(words, word) {
  let queue = [];
  for (let row = 0; row < words.length; row++) {
    for (let col = 0; col < words[0].length; col++) {
      if (words[row][col] === word[0]) {
        queue.push([row, col]);
        let comparisonString = word[0];
        let wordIndex = 0;
        let visited = [row.toString() + col.toString()];
        while (queue.length && wordIndex < word.length) {
          let [nodeX, nodeY] = queue.shift();
          wordIndex++;
          if (nodeX - 1 >= 0 && words[nodeX - 1][nodeY] === word[wordIndex] && !visited.includes((nodeX - 1).toString() + nodeY.toString())) {
            queue.push([nodeX - 1, nodeY]);
            visited.push((nodeX - 1).toString() + nodeY.toString());
            comparisonString += word[wordIndex];
          }
          if (nodeY - 1 >= 0 && words[nodeX][nodeY - 1] === word[wordIndex] && !visited.includes(nodeX.toString() + (nodeY - 1).toString())) {
            queue.push([nodeX, nodeY - 1]);
            visited.push(nodeX.toString() + (nodeY - 1).toString());
            comparisonString += word[wordIndex];
          }
          if (nodeX + 1 < words.length && words[nodeX + 1][nodeY] === word[wordIndex] && !visited.includes((nodeX + 1).toString() + nodeY.toString())) {
            queue.push([nodeX + 1, nodeY]);
            visited.push((nodeX + 1).toString() + nodeY.toString());
            comparisonString += word[wordIndex];
          }
          if (nodeY + 1 < words[0].length && words[nodeX][nodeY + 1] === word[wordIndex] && !visited.includes(nodeX.toString() + (nodeY + 1).toString())) {
            queue.push([nodeX, nodeY + 1]);
            visited.push(nodeX.toString() + (nodeY + 1).toString());
            comparisonString += word[wordIndex];
          }
        }
        if (comparisonString === word) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = wordSearch;
