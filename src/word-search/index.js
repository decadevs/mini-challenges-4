function wordSearch(words, word) {
  if(word === "") return true

  for(let row = 0; row < words.length; row++) {
    for(let col = 0; col < words[row].length; col++) {
      if(words[row][col] === word[0]) {
        if(dfs(0, row, col)) return true
      }
    }
  }
  return false

  function dfs(index, x, y) {
    
  }
}

module.exports = wordSearch;
