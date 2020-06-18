function wordSearch(words, word) {

   const callDFS = (row, col, idx) => {
        if(idx === word.length) return true;
        if(row >= words.length || row < 0 || words[row][col] !== word[idx]){
            return false;
        }

        words[row][col] = '#'; // mark as visited
        
         if(callDFS(row-1, col, idx +1) 
         || callDFS(row + 1, col, idx +1) 
         || callDFS(row, col -1, idx +1) 
         || callDFS(row, col + 1, idx +1)) return true;

        words[row][col] = word[idx]; // reset words

        return false;
   }

   for(let row = 0; row < words.length; row++) {
        for(let col = 0; col < words[0].length; col++) {
            if(words[row][col] === word[0] && callDFS(row, col, 0)) return true;
        }
    }
   
   return false;
}

module.exports = wordSearch;
