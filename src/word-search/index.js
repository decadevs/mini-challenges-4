/*Steps to word search

1.  Get all nodes of the start char for the word to be searched
2.  Loop through the nodes and perform a recursive visits of the adjacents of the node
3.  If the next char is found on either of the adjacents; explore that adjacent for the next other character
4.  If not found on any of the adjacents, re-load the recursion with the initial Node for another possible adjacent visit
5.  Continue until all the nodes have explored the possible word. 
6.  Return true if the word was found from any of the Node traversal
*/


function wordSearch(words, word) {


}
module.exports = wordSearch;
