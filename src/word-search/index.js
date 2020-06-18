function wordSearch(words,word) {
        for(let i=0;i<words.length;i++){
        	for(let j =0;j<words[0].length;j++){
            if(words[i][j]==word.charAt(0) && dfs(words,i,j,word,0)){
             return true;
                }      		
        	}
        }
        return false;

function dfs(words,row,col,word,pointer){

	if(pointer==word.length){
   	return true;
   }

	// handle out of bound index
	if(row<0 || col<0 || row>words.length-1 || 
		col>words[0].length-1||
		words[row][col]!=word.charAt(pointer)
		){
		return false;
	}

   // process
   let temp =words[row][col];
   words[row][col]="-"
  let res =
  dfs(words,row-1,col,word,pointer+1)||
  dfs(words,row+1,col,word,pointer+1)||
  dfs(words,row,col-1,word,pointer+1)||
  dfs(words,row,col+1,word,pointer+1)
 
  words[row][col]=temp;

  return res;
      
  }
}
module.exports = wordSearch;
