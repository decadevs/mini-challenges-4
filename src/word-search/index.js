/*Steps to word search

1.  Get all nodes of the start char for the word to be searched
2.  Loop through the nodes and perform a recursive visits of the adjacents of the node
3.  If the next char is found on either of the adjacents; explore that adjacent for the next other character
4.  If not found on any of the adjacents, re-load the recursion with the initial Node for another possible adjacent visit
5.  Continue until all the nodes have explored the possible word. 
6.  Return true if the word was found from any of the Node traversal
*/

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

function isInBound(point,words){
  let wordSize=words.length;
  let innerWordSize=words[0].length;
  
  let row=point[0]
  let col=point[1]
  if(row>=wordSize || row < 0 || col >= innerWordSize || col < 0){
    return false;
  }
  return true;
}


function wordSearch(words, word) {}
module.exports = wordSearch;
