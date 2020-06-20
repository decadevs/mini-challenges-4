function wordSearch(words, word){

  //this function searches for all the index positions(rows and columns) of the first character
  //of the "word" and store them as two sets of arrays(rowIndex and colIndex) inside an object
  //and return the object. These positions are the starting points to searching from.
  function searchIndex(words,word){
    let rowIndex=[];
    let colIndex=[];

    for(let row=0; row<words.length; row++){
      for(let col=0; col<words[row].length; col++){
        if(words[row][col]==word[0]){
          rowIndex.push(row);
          colIndex.push(col)
        }
      }
    }
    return  {"rowPosition":rowIndex, "colPosition":colIndex};
  }
  //This is the manager, the controller general. As the name implies, it controls every activities
  //that is to take place. It calls the searchIndex function, collects feedback, and calls the
  //CheckNextChar function. it tells the checkNextChar funtion where to start its search from,
  //collects feedback from checkNextChar which it uses to determin the next action. The next
  //action could be to make another search using another starting point(that is if the "word" was
  //not found) or to return "true"(if the word was found) or to return "false"(if the starting
  //points have been used up).
  //NOTE THAT THE "manager" REPORTS TO THE COMPANY OWNER WHICH IS THE "wordSearch". ABOVE ALL,
  //THEY ALL REPORT TO THEIR GOD WHICH "YOOOU"...

  function manager(search){
    let indexr=search.rowPosition;
    let indexc = search.colPosition;
    for(let a=0; a<indexr.length; a++){
      board=JSON.parse(JSON.stringify(words));
      if(checkNextChar(board,word,indexr[a],indexc[a],1)){
        return true;
      }
    }
    return false;
  }
  //this function does the "word" search. It first collects the first starting point(row and col)
  //and makes a search. if the "word" exist, it returns true else, it collects another starting
  //point. after using all the starting point and could not find the "word", it returns false.
  function checkNextChar(words,word,row,col,indexPositionsOfWord ){
    words[row][col]=0
    if(indexPositionsOfWord==word.length){
      return true;
    }

    if(row+1<=words.length && words[row+1]!==undefined && words[row+1][col]==word[indexPositionsOfWord]){
      words[row+1][col]=0
      if(checkNextChar(words,word,(row+1),col,indexPositionsOfWord+1)){
        return true
      }

    }
    if(row-1>=0 &&  words[row-1]!==undefined && words[row-1][col]==word[indexPositionsOfWord]){
      words[row-1][col]=0
      if(checkNextChar(words,word,(row-1),col,indexPositionsOfWord+1)){
        return true;
      }

    }
    if(col-1>=0 && words[row][col-1]!=undefined && words[row][col-1]==word[indexPositionsOfWord]){
      words[row][col-1]=0
      if(checkNextChar(words,word,(row),col-1,indexPositionsOfWord+1)){
        return true;
      }

    }
    if(col+1<=words[0].length && words[row][col+1]!=undefined && words[row][col+1]==word[indexPositionsOfWord]){
      words[row][col+1]=0
      if(checkNextChar(words,word,(row),col+1,indexPositionsOfWord+1)){
        return true;
      }
    }
    return 0;
  }
  return manager(searchIndex(words,word));
}
module.exports = wordSearch;
