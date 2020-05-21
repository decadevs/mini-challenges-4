function wordSearch(words, word) 
{
    //check to ensure that proper input has been entered, if not, prompt the user
    if (!Array.isArray(words) || typeof word !== "string")
    {
        return `Please enter a valid input`;
    }
    //declaration of variables
    let holdWord = []; //letters found would be stored here
    let indexToSearch = 0;//first index of the target word letter before subsequent letters   
    let searchTrack = [];//2D boolean array to keep track of each search made

    //loop through all the items of words array and tranverse through them while searching for the target word
    for (let i = 0; i < words.length; i++)
    {
        for (let j = 0; j < words[i].length; j++)
        {
            if (words[i][j] === word[indexToSearch] && holdWord.join('') !== word)
            {
                holdWord = [];//refresh the container at the start of each new search transverse
                //set all the already decalared boolean variable values to false at each transverse  
                searchTrack = new Array(words.length).fill([]).map((e, i) => new Array(words[i].length).fill(false));
                searchMechanism(words, i, j, word, indexToSearch, searchTrack, holdWord);
            }
        }
    }
    //if you find the word return true, if not, return false.
    return holdWord.join('') === word? true : false;
}

//declaration of a function to handle transversing during search
function searchMechanism (words, row, col, wordToSearch, indexToSearch, searchTrack, container)
{
    //discontinue the search(i.e transverse) if any of this constraints is met
    if (row < 0  || row > words.length - 1 || col < 0 || col > words[row].length - 1)
    {
        return;
    }
    //discontinue the current search(i.e transverse) if any letter of the target  
    //word is not found in the words or such letter has already been searched
    if (searchTrack[row][col] || words[row][col] !== wordToSearch[indexToSearch])
    {
        return;
    }

    searchTrack[row][col] = true;//keep record of all search made in the boolean array        
    container.push(words[row][col]);//store the search result in the container array
    indexToSearch++ //increment the search index for the next letter inline
    
    if (indexToSearch < container.length)//ensure adjacent duplicate letters are not repeated...
    {
        container.pop();//...if any letter is added more than once, remove it.
    }
    //recursively target all the adjecent element during search vertically and horizontally using the underly function
    searchMechanism(words, row - 1, col, wordToSearch, indexToSearch, searchTrack, container);
    searchMechanism(words, row + 1, col, wordToSearch, indexToSearch, searchTrack, container);
    searchMechanism(words, row, col + 1, wordToSearch, indexToSearch, searchTrack, container);
    searchMechanism(words, row, col - 1, wordToSearch, indexToSearch, searchTrack, container);
}

module.exports = wordSearch;