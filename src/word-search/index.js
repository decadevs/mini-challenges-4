function wordSearch(board, word) {

  for(let row=0; row<board.length;row++){
      for(let col=0; col<board[row].length; col++){
          if (board[row][col]===word[0]){
             if(checkNext(board, word, row, col, 0, "",0)){
                 return true;
             }

          }
      }
  }
  return false
}
  function checkNext(board, word, row, col, wordCharIndex, wordComparator){

      if(wordComparator == word){
        return 1;
      }
      if((row<0||row>=board.length||col<0||col>=board[row].length||board[row][col] !== word[wordCharIndex])){
          return 0;
      }
      wordComparator +=board[row][col];
      board[row][col]=0;

      if(checkNext(board,word, row-1, col, wordCharIndex+1, wordComparator)){
        return true;
      }
      if(checkNext(board,word, row+1, col, wordCharIndex+1, wordComparator)){
        return true;
      }
      if(checkNext(board,word, row, col-1, wordCharIndex+1, wordComparator)){
        return true;
      }
      if(checkNext(board,word, row, col+1, wordCharIndex+1, wordComparator)){
        return true;
      }

  }
module.exports = wordSearch;


