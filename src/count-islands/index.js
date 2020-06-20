function countIslands(grid) {
  //This function directs every activities that goes on here. it calls the checkDreyLand function,
  //which searches for inland, gives it the axis of the point to start seach from and collects
  //feedback from it.
  function manager(matrix){
    let inlandRecorder=0;
    for(let row=0; row<matrix.length; row++){
      for(let column=0; column<matrix[row].length; column++){
        if(matrix[row][column]==1){
          inlandRecorder++;
          checkDryLand(matrix,row,column);
        }
      }
    }
    return inlandRecorder;
  }
  //This function searches for island by checking adjacent element(land) and equating it to zero
  //if 1 or ignors if zero.
  function checkDryLand(matrix,axisX,axisY){
     //checking adjacent up
    if(axisX+1<=matrix.length && matrix[axisX+1]!==undefined && matrix[axisX+1][axisY]==1){
      matrix[axisX+1][axisY]=0;
      checkDryLand(matrix,axisX+1,axisY);
    }
    //checking adjacent down
    if(axisX-1>=0 &&  matrix[axisX-1]!==undefined && matrix[axisX-1][axisY]==1){
      matrix[axisX-1][axisY]=0;
      checkDryLand(matrix,axisX-1,axisY);
    }
    //checking adjacent left
    if(axisY-1>=0 && matrix[axisX][axisY-1]!=undefined && matrix[axisX][axisY-1]==1){
      matrix[axisX][axisY-1]=0;
      checkDryLand(matrix,axisX,axisY-1);
    }
    //checking adjacent right
    if(axisY+1<=matrix[0].length && matrix[axisX][axisY+1]!=undefined && matrix[axisX][axisY+1]==1){
      matrix[axisX][axisY+1]=0;
      checkDryLand(matrix,axisX,axisY+1);
    }
    return "Thank you";
  }
  //the manager is done and about to return result to the company owner(i.e countIsland). Always remember
  //that the compant owner(countIsland) reports it the creator. Which is YOU...
  return manager(grid);
}


module.exports = countIslands;
