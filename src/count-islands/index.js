function countIslands(grid) {
	let count = 0;
	for(let i=0;i<grid.length;i++){
		for(let j=0;j<grid[0].length;j++){
			if(grid[i][j]==1){
			dfs(grid,i,j);
			count++;}
		}
	}
	function dfs(grid,row,column){
       // handle out of bound
       if(row<0||column<0||row>grid.length-1||column>grid[0].length-1){
       	return;
       }
       // handle water
       if(grid[row][column]==0){
       	return;
       }
       // process a cell containing 1 by converting it to zero
       // in order to avoid processing that cell again
       grid[row][column]=0;
       
       // recursive call to dfs
       dfs(grid,row,column-1)//left
       dfs(grid,row,column+1)//right
       dfs(grid,row-1,column)//top
       dfs(grid,row+1,column)//bottom
	}
	return count;
}

module.exports = countIslands;
