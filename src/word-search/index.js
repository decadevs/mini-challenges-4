function wordSearch(words, word)
 {
     //Helper function
     function spellCheck(array,word,a,b,c)
     {
        //change used letter to zero
        array[a][b] = 0;
        /* use parameter "c" to count how many times the function is called
        if the word is correctly spelt c will be equal to the length of the word array*/ 
        c+=1;
        //check for the different positions around the matching alphabet and the next using recursion

        //up
        if(a-1 >= 0)
        {
            if(array[a-1][b] == word[c])
            {
                spellCheck(array,word,a-1,b,c);
            }
        }

         //right
         if (b+1 < array[a].length) 
         {
             if (array[a][b + 1] == word[c])
             {
                 spellCheck(array, word, a, b + 1, c);
             }
         }    

        //down
        if(a+1 < array.length)
        {
        if(array[a+1][b] == word[c])
        {
            spellCheck(array,word,a+1,b,c);
        }
        }
          

        //Left
        if(b-1 >= 0)
        {
            if(array[a][b-1] == word[c])
            {
                spellCheck(array, word,a, b-1,c);
            }
        }
        

        /* getting here means it can go no further so c is meant to be the length of the array of the word*/ 
        //so we empty our word array if the count is equal
        if(c==word.length)
        {
            word.splice(0,word.length);
        }else
        {
        //if c != word.length then we return the letters in the grid that were changed to zero
        array[a][b]=word[c-1];
        }
    }


    //change word to an array
    word = word.split("");
    var w = word[0];
    var k = 0;

    //Looping through the words array index by index
    //compare to the starting letter now stored in w
    for (let i = 0; i < words.length; i++) 
     {
         for (let j = 0; j < words[i].length; j++) 
         {
             if(words[i][j] == w)
             {
                spellCheck(words,word,i,j,k);
             }
         }
     }

     //check length of word array 
     //if it is empty the counter c reached the length and we emptied the array
     if(word.length == 0)
     {
         return true;
     }else
     {
         return false
     }
 }

module.exports = wordSearch;
