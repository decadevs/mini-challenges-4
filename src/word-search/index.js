function wordSearch(words, word) {
  let output = '';
  word.split('').forEach(letter => {

    let i = 0;
    while(i < words.length){
      if(words[i][i] === letter){
        output += words[i][i];
      }
      i++;
    }

  })
}

module.exports = wordSearch;
