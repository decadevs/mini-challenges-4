function wordSearch(words, word) {


    
    let row = words.length;
    let col= words[0].length;
    let visit =  [];
    let count  = 0;
    // let wordCount = 0; 
    let wordLength =  word.length;
    let wordArray = word.split("");
    let check ;

    let abort = false;


    for (let a = 0; a < row; a++) {

        visit[a] = [];
    
    
}

for (let i = 0; i < words.length; i++) {
       

    for (let j = 0; j < words[i].length; j++) {

        visit[i][j] = false;
        
        
    }

    
}


for (let c = 0; c < words.length; c++) {

    for (let d = 0; d < words[c].length; d++) {

        if (words[c][d] == wordArray[count] &&  visit[c][d] ==  false && count != wordLength ) {
                  
           check = checkIsland(words, c, d, visit , count);
           
           if (check == wordLength) {

            abort = true;
            
             }

            
        } 

        if (check != wordLength){

            count = 0;
        }


        if (abort == true){

            break;
        }


         
       



        
    }

    if (abort == true){

        break;
    }

    


    
}

if (check == wordLength){


    return true ;


} else {

    return false;
}




function checkIsland(grid, x, y, visit, check){

    count = check + 1;


    visit[x][y] = true;

    
    
    if (safe(grid, x-1, y, visit, count)) {

        checkIsland(grid, x-1, y, visit, count);
        
    }



    
   

    
    if (safe(grid, x, y+1, visit,count)) {

        checkIsland(grid, x, y+1, visit, count);
        
    }

    if (safe(grid, x  , y-1, visit, count)) {

        checkIsland(grid, x, y-1, visit, count);
        
    }

    if (safe(grid, x+ 1, y, visit, count)) {

        checkIsland(grid, x +1, y, visit, count);
        
    }

    if (count == wordLength){

        return count ;


    }

   






}


function safe(sGrid, sRow, sCol, sVisit){

    return sRow >= 0 &&  sRow < row  && 
           sCol >= 0 && sCol < col  && 
           sGrid[sRow][sCol] == wordArray[count] && 
           sVisit[sRow][sCol] == false ;


}








}

module.exports = wordSearch;
