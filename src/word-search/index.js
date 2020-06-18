const wordSearch = (words, word) => {
    
    word.split("");
    let indexArray = [];
  
    for (let i = 0; i < words.length; i++) {
      words[i].forEach((character, j) => {
        if (character === word[0]) {
          indexArray.push([i, j]);
        }
      });
    }
  
    if(indexArray.length === 0)  {
        return false;
    }
  
    let scout = 0;
    let checked = [];
    let answer = false;
  
    const locateAdjacents = (i, j, scoutPosition) => {
      let list = [];
      
        if (i > 0 && words[i - 1][j] === word[scoutPosition] && !checked.includes(`${[i - 1, j]}`)) {
            list.push([i - 1, j]);
        }
      
        if (j < words[i].length - 1 && words[i][j + 1] === word[scoutPosition] && !checked.includes(`${[i, j + 1]}`)) {
            list.push([i, j + 1]);
        }
      
        if (i < words.length - 1 && words[i + 1][j] === word[scoutPosition] && !checked.includes(`${[i + 1, j]}`)) {
            list.push([i + 1, j]);
        }
      
        if (j > 0 && words[i][j - 1] === word[scoutPosition] && !checked.includes(`${[i, j - 1]}`)) {
            list.push([i, j - 1]);
        }
      return list;
    }
    
    const searchFor = (array) => {
      let scoutPosition = ++scout;
      while (!answer && array.length !== 0) {
        let temp = array.shift();
        checked.push(`${temp}`);
        let controlArray = locateAdjacents(...temp, scoutPosition);
        if (controlArray.length === 0) {
          checked.pop();
          continue;
        }
        if (checked.length === word.length-1) {
          answer = true;
          break;
        }
        searchFor(controlArray);
      }
    }
    searchFor(indexArray);
    return answer;    
}

    module.exports = wordSearch;
