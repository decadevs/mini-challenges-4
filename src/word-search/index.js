/*Steps to word search

1.  Get all nodes of the start char for the word to be searched
2.  Loop through the nodes and perform a recursive visits of the adjacents of the node
3.  If the next char is found on either of the adjacents; explore that adjacent for the next other character
4.  If not found on any of the adjacents, re-load the recursion with the initial Node for another possible adjacent visit
5.  Continue until all the nodes have explored the possible word. 
6.  Return true if the word was found from any of the Node traversal
*/

var visited = [];
const wordsFoundInNodes = [];

//declare function to get all Nodes from the words grid of the first char
function getNodes(words, startOfString) {
  let nodes = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[0].length; j++) {
      if (words[i][j] === startOfString) {
        nodes.push([i, j]);
      }
    }
  }
  return nodes;
}

//declare a function to check if current sub index of words is in the bound within the grid

function isInBound(point, words) {
  let wordSize = words.length;
  let innerWordSize = words[0].length;

  let row = point[0];
  let col = point[1];
  if (row >= wordSize || row < 0 || col >= innerWordSize || col < 0) {
    return false;
  }
  return true;
}

//function to check if the selected character index in the words grid have not been selected
function notVisited(nodePoint, visited) {
  let isNotVisited = visited.every(
    (item) => JSON.stringify(item) !== JSON.stringify(nodePoint)
  );

  if (isNotVisited) {
    return true;
  }
  return false;
}

function wordSearch(words, word) {
  const nodesGotten = getNodes(words, word[0]);
  let rowN = 0;
  let colN = 0;
  let responseIfWordFoundInAnyNode = false;
  for (let y = 0; y < nodesGotten.length; y++) {
    rowN = nodesGotten[y][0];
    colN = nodesGotten[y][1];
    wordsFoundInNodes[y] = []; //to store each nodes traversal as it tends to getting the word been searched
    visited = [];
    let nodeHead = [rowN, colN];
    let startPoint = [rowN, colN];
    //traverse this current node
    startTraversalFromNode(nodeHead, startPoint, y, 1, words, word);
  }

  //check if the length of node is same with its occurence in words

  let countNodeExistenceInWord=word.split('').filter(eachChar=>eachChar===word[0])
  if(countNodeExistenceInWord.length>nodesGotten.length){
    return false
  }

  for(let j=0;j<wordsFoundInNodes.length;j++){
    let wordInOneOfNode = wordsFoundInNodes[j].join('').includes(word)
    if(wordInOneOfNode===true){
      responseIfWordFoundInAnyNode=true
    }
  }

  if(responseIfWordFoundInAnyNode===true){
    return true
  }
  else{
    return false
  }
}

function startTraversalFromNode(
  nodeHead,
  startPoint,
  nodePoint,
  count,
  words,
  word
) {
  if (startPoint.length === 0) {
    return; //take care of when it does not find char to match the word after it had traversed the adjacent
  }

  let row = startPoint[0];
  let col = startPoint[1];
  let queueWord = words[row][col];

  //save the queue in the wordsFoundInNodes so as to start traversing its adjacent recursively
  wordsFoundInNodes[nodePoint].push(queueWord);

  //mark the current item as visited
  visited.push([row, col]);

  let nextWord = word[count];

  //make startPoint to be zero, so we update it after the nextWord been found around the adjacents
  startPoint.length = 0;

  //check if the traversals are in bound, equal to the next word and note visited
  if(isInBound([row,col+1],words) && words[row][col+1]===nextWord && notVisited([row,col +1],visited)){

    //if this is true, traverse again from this current found word
    startTraversalFromNode(nodeHead,[row,col+1],nodePoint,count+1,words,word)
  }
  
  if(isInBound([row+1,col],words) && words[row+1][col]===nextWord && notVisited([row+1,col],visited)){
    startTraversalFromNode(nodeHead,[row+1,col],nodePoint,count+1,words,word)
  }

  if(isInBound([row,col-1],words) && words[row][col-1]===nextWord && notVisited([row,col-1],visited)){
    startTraversalFromNode(nodeHead,[row,col-1],nodePoint,count+1,words,word)
  }

  if(isInBound([row-1,col],words) && words[row-1][col]===nextWord && notVisited([row-1,col],visited)){
    startTraversalFromNode(nodeHead,[row-1,col],nodePoint,count+1,words,word)
  }

  //re-load the traversal with initial node head if it fails to find next words along the way from the current adjacent
  //it was traversing recursively from

  startTraversalFromNode(nodeHead,(startPoint=nodeHead),nodePoint,1,words,word);
  

}
module.exports = wordSearch;
