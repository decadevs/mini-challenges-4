function wordSearch(words, word) {
    let wordArray = word.split('')
    //console.log("before"+wordArray);
   
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(wordArray.includes(words[i][j])){
                let idx = wordArray.indexOf(words[i][j])
                 wordArray.splice(idx,1)[0];
             }
        }
    }
        
    
    //console.log("After"+ wordArray);
    if(wordArray.length === 0 ) {
        return true;
    }else{
        return false;
    }
   
}

module.exports = wordSearch;
