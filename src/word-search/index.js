function wordSearch(words, word) {
  if(!Array.isArray(words) || typeof word !== 'string'){
    throw TypeError('Invalid Parameters given, You must supply an array and a string');
  }

  const depth = words.length-1;
  const breadth = words[0].length - 1;
  let idxCounter = 0;
  let visitedPoints = [];
  //cREATE Array To Check points Visited
  for(let i = 0; i < words.length; i++){
    visitedPoints.push([]);
  }

  function searchIsTrue(row,column,idx){
    //BASE CASES TO CUT THE RECURSION SHORT
    if(row < 0 || row > depth ||
      column < 0 || column > breadth){
        return;
      }


      /*Testing what was happening inside the loop running*/
      // if(row >= 0 || row <= depth ||
      // column >= 0 || column <= breadth){
      //   console.log(words[row][column]);
      // }

      if(word[idx] !== words[row][column]) return;


      if(visitedPoints[row][column] === true){
        return;
      }
        visitedPoints[row][column] = true;

        if(idx === word.length-1) return true;

        if(searchIsTrue(row-1,column,idx+1) ||
            searchIsTrue(row+1,column,idx+1) ||
            searchIsTrue(row,column-1,idx+1) ||
            searchIsTrue(row,column+1,idx+1)){
          return true
          }else {
          visitedPoints[row][column] = false;
          return;
        }

      }

      for(let row = 0; row <= depth; row++){
        for(let column = 0; column <= breadth; column++){
          if(words[row][column] === word[0] ) {
            if(searchIsTrue(row,column, 0)) return true;
          }
        }
      }
  return false;

 }
 module.exports = wordSearch;

// function wordSearch(words, word) {
//   if(!Array.isArray(words) || typeof word !== 'string'){
//     throw TypeError('Invalid Parameters given, You must supply an array and a string');
//   }
//
//   const depth = words.length;
//   const breadth = words[0].length;
//   let idxCounter = 0;
//   let visitedPoints = []; let emptyArr = [];
//   for(let i = 0; i < words.length; i++){
//     visitedPoints.push([]);
//   }
//   console.log(visitedPoints);
//
//
//   for(let row = 0; row < depth; row++){
//     for(let column = 0; column < breadth; column++){
//       if(words[row][column] === word[0] ) {
//         if(searchIsTrue(row,column, 0)) return true;
//       }
//     }
//   }
//   return false;
//
//   function searchIsTrue(row,column,idx){
//     console.log('is it reaching here?');
//     //BASE CASES TO CUT THE RECURSION SHORT
//
//     if(row < 0 || row > words.length-1 ||
//       column < 0 || column > words[row].length-1){
//         return;
//       }
//
//       if(visitedPoints[row][column] === true){
//         return;
//       }
//
//       if(words[row][column] !== word[idx]) return;
//
//
//       if(idx === word.length-1) return true;
//
//       visitedPoints[row][column] = true;
//
//
//         // let ch = words[row][column];
//         // words[row][column] = '#';
//
//         if(searchIsTrue(row-1,column,idx+1) ||
//             searchIsTrue(row+1,column,idx+1) ||
//             searchIsTrue(row,column-1,idx+1) ||
//             searchIsTrue(row,column+1,idx+1)){
//           return true
//           }else {
//           visitedPoints[row][column] = false;
//           return;
//         }
//
//       }
//
//     }
//
// }



// function getAdjacents(rowSize, columnSize, position /* [row, column] */) {
//   const [row, column] = position;
//
//   const topAdjacent = row === 0 ? false : [row - 1, column];
//   const rightAdjacent = column === columnSize ? false : [row, column + 1];
//   const bottomAdjacent = row === rowSize ? false : [row + 1, column];
//   const leftAdjacent = column === 0 ? false : [row, column -1]
//
//   return [topAdjacent, rightAdjacent, bottomAdjacent, leftAdjacent].filter(Boolean)
// }

  //FORM AN ADJACENCY MATRIX

  // let graphBlueprint = new Graph();
  // let adjList = makeAdjacencyList(words,graphBlueprint);

  /*******
  function makeAdjacencyList(list,graph){
    //FORM A GRAPH FROM A 2-DIMENSIONAL MATRIX
    const depth = list.length;
    const breadth = list[0].length;

    for(let row = 0; row < list.length; row++ ){
      for(let col = 0; col < list[row].length; col++){
        graph.addVertex(list[row][col]);

        let neighbours = getAdjacents(depth-1,breadth-1,[row,col]);
        // console.log('lump',neighbours);
        neighbours.forEach(adjNodeIdx => {
          graph.addEdge(list[row][col],list[adjNodeIdx[0]][adjNodeIdx[1]]);
        });
      } // INNER FOR LOOP
    } //OUTER FOR LOOP
    return graph.adjList;
  }
  ****/
  // console.log(adjList);


  // const isVisited = {};
  /***************
  function searcher(word,list,matrix){
    word.toUpperCase();
    //WORD is a string.
    let visited = {};
    let node, neighbours;
    let queue = [];
    let depth = matrix.length;
    let breadth = matrix[0].length;
    let row = 0;
      while(row < depth){
        let col = 0;
        while(col < breadth){
          queue = [];
          let node = matrix[row][col];
          //Condition to Check FOR Starting NODE
          let neighbourIdxArr = getAdjacents(depth-1,breadth-1,[row,col]);
          // console.log(neighbourIdxArr);
          if(!visited[node]){
            visited[node] = true;
            neighbourIdxArr.forEach(arrIdx => {
              //Add them to the queue
              neighbours = matrix[arrIdx[0]][arrIdx[1]];
              console.log(arrIdx[0],arrIdx[1]);
              queue.push(neighbours);
            });
          } // check if node has been visited
          //Condition to Check FOR Starting NODE
        col++;
      }
      row++;
    }

    return true;
  }
  ****************/
  // searcher(word,adjList,words);
  //LOGIC
  //AS YOU FIND THE CURRENT ELEMENT JUMP TO that
  // NODE and search for its neighbours


//UNDIRECTED GRAPH
/**********
function Graph(){
    this.adjList = {};

  this.addVertex = (vertex) => {
    let emptyArr = [];
    if(!this.adjList[vertex]) this.adjList[vertex] = emptyArr;
    return this.adjList;
  }

  this.addEdge = (v1,v2) => {
    if(!this.adjList[v1] || !this.adjList[v2] ) {
      return undefined;
    }
    if(!this.adjList[v1].includes(v2) && v1 !== v2){
      this.adjList[v1].push(v2);
    }
    if(!this.adjList[v2].includes(v1) && v1 !== v2){
      this.adjList[v2].push(v1);
    }
  }

  this.dfsRecursive = (start) => {
    let result = [];
    let visited = {};
    let list= this.adjList;
    // let edge;
    function dfs(v){
      if(!v) return null;
      visited[v] = true;
      result.push(v);
      for(let edge of list[v]){
        if(!visited[edge]) dfs(edge);
      }
    }
    dfs(start);
    return result;
  }

  this.dfsIterative = (start) => {
    let results = [];
    let visited = {};
    let stack = [];
    stack.push(start);

    while(stack.length > 0){
      let vertex = stack.pop();
      if(!visited[vertex]){
        visited[vertex] = true;
        results.push(vertex);
      stack.push(...this.adjList[vertex]);
      }
    }
    return results;
  }

  this.bfsIterative = (start) => {
    let visited = {};
    let results = [];
    let queue = [start];
      let vertex = queue[0];
      visited[vertex] =  true;
      while(queue.length){
        vertex = queue.shift();
        results.push(vertex);
        for(let neighbour of this.adjList[vertex]){
          if(!visited[neighbour]){
            visited[neighbour] =  true;
            queue.push(neighbour);
          }
        }
      }
      return results;
    }
    //End of Graph Class
  }
************/
