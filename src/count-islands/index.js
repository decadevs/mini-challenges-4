//Helper function
function SetToZero(map,a,b) 
{
    map[a][b] = 0;
    if (a + 1 < map.length) 
    {
        //land down
        if (map[a + 1][b] == 1) {
            SetToZero(map, a + 1, b);
        }
    }

    //Land to the right
    if (map[a][b + 1] == 1) 
    {
        SetToZero(map, a, b + 1);
    }


    if(b-1 >= 0 )
    {
    //land to the left
    if (map[a][b - 1] == 1)
    {
        SetToZero(map,a, b - 1);
    }

    }
     
    //land up
    if(a-1>=0)
    {
    if(map[a-1][b] == 1)
    {
        SetToZero(map,a-1,b);
    }
    }
}


function countIslands(grid) 
{
    var counter = 0;
    for (var i = 0; i < grid.length; i++) 
    {
       for (var j = 0; j < grid[i].length; j++) 
        {
            if (grid[i][j] == 1)
            {
                counter+=1;
                SetToZero(grid,i,j);
            }
            
        }
        
        
    }
    return counter;
}

module.exports = countIslands;
