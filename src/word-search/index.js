function wordSearch(words, word) {
  let stack = [];
  for (let row = 0; row < words.length; row++) {
    for (let col = 0; col < words[0].length; col++) {
      if (words[row][col] === word[0]) {
        stack = [];
        stack.push([row, col]);
        let comparisonString = word[0];
        let wordIndex = 1;
        let visited = [row.toString() + col.toString()];
        while (stack.length && wordIndex !== word.length) {
          let [nodeX, nodeY] = stack[stack.length - 1];
          if (nodeX - 1 >= 0 && words[nodeX - 1][nodeY] === word[wordIndex] && !visited.includes((nodeX - 1).toString() + nodeY.toString())) {
            stack.push([nodeX - 1, nodeY]);
            visited.push((nodeX - 1).toString() + nodeY.toString());
            comparisonString += word[wordIndex];
            wordIndex++;
          }
          else if (nodeY - 1 >= 0 && words[nodeX][nodeY - 1] === word[wordIndex] && !visited.includes(nodeX.toString() + (nodeY - 1).toString())) {
            stack.push([nodeX, nodeY - 1]);
            visited.push(nodeX.toString() + (nodeY - 1).toString());
            comparisonString += word[wordIndex];
            wordIndex++;
          }
          else if (nodeX + 1 < words.length && words[nodeX + 1][nodeY] === word[wordIndex] && !visited.includes((nodeX + 1).toString() + nodeY.toString())) {
            stack.push([nodeX + 1, nodeY]);
            visited.push((nodeX + 1).toString() + nodeY.toString());
            comparisonString += word[wordIndex];
            wordIndex++;
          }
          else if (nodeY + 1 < words[0].length && words[nodeX][nodeY + 1] === word[wordIndex] && !visited.includes(nodeX.toString() + (nodeY + 1).toString())) {
            stack.push([nodeX, nodeY + 1]);
            visited.push(nodeX.toString() + (nodeY + 1).toString());
            comparisonString += word[wordIndex];
            wordIndex++;
          }
          else {
            stack.pop();
            wordIndex--;
            comparisonString = comparisonString.slice(0, -1);
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
