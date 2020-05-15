function wordSearch(words, word) {
  const rows = words.length;
  const cols = words[0].length;

  let n = 0;
  let check = false;

  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if(words[i][j] == word[0])
              if(search(i,j,n)) check = true;
      }
  }

  function search (i, j, n) {
      if(n === word.length) return true;
      if(i >= 0 && i < rows && j >= 0 && j < cols && words[i][j] === word[n]){
          words[i][j] = '$';
          const searchFound = search(i-1,j,n+1) || search(i+1,j,n+1) || search(i,j-1,n+1) || search(i,j+1,n+1)
          words[i][j] = word[n];
          return searchFound;
      }
      return false
  }
  return check;

}

module.exports = wordSearch;
