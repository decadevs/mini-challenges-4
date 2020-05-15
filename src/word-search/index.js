function wordSearch(words, word) {
  let rowLength,
      colLength;

  const validateNextRowAndCol = (row, col) => {
    if(row > rowLength || row < 0){
      return false;
    }

    if(col < 0 || col > colLength){
      return false;
    }
    return true;
  }

  const isPointVisited = (point, arr) => {
  const [x, y] = point; 
  if(!arr) return
  for(let i = 0; i < arr.length; i++){
    let [row, col] = arr[i];
    if(x === row && y === col){
      return true
    }
  }
  return false
}

  const searchWord = (location, stringPosition, visitedPoints, word) => {
      if(stringPosition === word.length - 1){
        return true
      }
      if(!location){
        return false
      }

      visitedPoints.push(location);
      const nextLetter = word[stringPosition + 1];
      const nextPosition = null;
      const [row, col] = location;
      let isFound;
      //crawl up
      if( validateNextRowAndCol(row - 1, col) 
      && !isPointVisited([row - 1, col], visitedPoints) 
      && words[row-1][col] === nextLetter ){
        isFound = searchWord([row - 1, col], stringPosition + 1, visitedPoints, word );
        if(isFound) return true;
      }
      //crawl down
      if( validateNextRowAndCol(row + 1, col) 
      && !isPointVisited([row + 1, col], visitedPoints) 
      && words[row + 1][col] === nextLetter ){
        isFound = searchWord([row + 1, col], stringPosition + 1, visitedPoints, word );
        if(isFound) return true;
      }
      //crawl rigth
      if( validateNextRowAndCol(row, col + 1) 
      && !isPointVisited([row, col + 1], visitedPoints) 
      && words[row][col + 1] === nextLetter ){
        isFound = searchWord([row, col + 1], stringPosition + 1, visitedPoints, word );
        if(isFound) return true;
      }
      //crawl left
      if( validateNextRowAndCol(row, col - 1) 
      && !isPointVisited([row, col - 1], visitedPoints) 
      && words[row][col - 1] === nextLetter ){
        isFound = searchWord([row, col -1], stringPosition + 1, visitedPoints, word );
        if(isFound) return true;
      }

      searchWord(null, stringPosition, visitedPoints, word );

  }

  for(let row = 0; row < words.length; row++){
    rowLength = words.length -1 ;
    for(let col = 0; col < words[row].length; col++){
      colLength = words[row].length - 1;
      if(words[row][col] === word[0]){
        let isFound = searchWord([row, col], 0, [], word);
        if(isFound) return true;
      }
    }
  }
  return false;
}

module.exports = wordSearch;
