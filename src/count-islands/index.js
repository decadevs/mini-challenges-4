function countIslands(grid) {


    let row = grid.length;
    let col= grid[0].length;
    let visit =  [];
    let count  = 0;
    
    for (let a = 0; a < row; a++) {

            visit[a] = [];
        
        
    }
    

    for (let i = 0; i < grid.length; i++) {
       

        for (let j = 0; j < grid[i].length; j++) {

            visit[i][j] = false;
            

            
        }

        
    }


    for (let c = 0; c < grid.length; c++) {

        for (let d = 0; d < grid[c].length; d++) {

            if (grid[c][d] == 1 &&  visit[c][d] ==  false) {

                checkIsland(grid , c, d, visit);

                count = count + 1;


                
            }
           



            
        }
        


        
    }

    return count;

    function checkIsland(grid, x, y, visit){

        visit[x][y] = true;

        
        
        if (safe(grid, x-1, y, visit)) {

            checkIsland(grid, x-1, y, visit);
            
        }

    

        
       

        
        if (safe(grid, x, y+1, visit)) {

            checkIsland(grid, x, y+1, visit);
            
        }

        if (safe(grid, x  , y-1, visit)) {

            checkIsland(grid, x, y-1, visit);
            
        }

        if (safe(grid, x+ 1, y, visit)) {

            checkIsland(grid, x +1, y, visit);
            
        }

    




    }

   function safe(sGrid, sRow, sCol, sVisit){

        return sRow >= 0 &&  sRow < row  && sCol >= 0 && sCol < col  && sGrid[sRow][sCol] ==1 && sVisit[sRow][sCol] == false;


    }



 
}

module.exports = countIslands;
