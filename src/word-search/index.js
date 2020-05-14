function wordSearch(words, word)
 { 
     //Helper function
     function spellCheck(array,word,a,b)
     {
        .unshift
        //up
        if(a-1 > 0)
        {
            if(a-1 == word[0])
        }
     }




     word = word.split("");

     //Looping through the words array index by index

     for (let i = 0; i < words.length; i++) 
     {
         for (let j = 0; j < words[i].length; j++) 
         {
             if(words[i][j] == word[0])
             {
                 spellCheck(words,word,i,j);
             }
             
             
         }
         
     }
    console.log(word);
 }


wordSearch([
    ["C", "D", "Y", "C", "X"],
    ["A", "N", "Y", "Z", "X"],
    ["T", "F", "Z", "A", "T"],
    ["M", "D", "B", "U", "T"],
], "CAT");
module.exports = wordSearch;
