const chageLetter = (originalWord, letter, newWord, lives) => {
    let cont = 0;

    //*the value of the newWord is modified
    for (var i = 0; i < originalWord.length; i++) {
        if (originalWord[i] === letter) {
            if (i === (originalWord.length - 1)) {
                newWord = newWord.slice(0, (i * 2)) + letter + newWord.slice((i * 2) + 1);
            } else if (i > 0 && i < (originalWord.length) - 1) {
                newWord = newWord.slice(0, i * 2) + letter + newWord.slice((i * 2) + 1);
            } else if (i === 0) {
                newWord = newWord.slice(0, 0) + letter + newWord.slice(1);
            }
        } else {
            cont++
        }
    }

    return {
        originalWord: originalWord,
        newWord: newWord,
        lives: lives,
        cont: cont
    }
}


module.exports = chageLetter;