const hideWord = (word) => {
    return word.map(char=>char.replace(/[a-z]/gi,'_'));
}


module.exports = {
    hideWord
} 
