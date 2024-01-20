/**
 * const changeLetter: función que se encarga de intercambiar una letra(letter)
 *  por uno de los underscore de la palabra oculta (hiddenWord), 
 * dependiendo de la posición de donde se encuentre dicha letra(Letter) en la palabra 
 * original(generatedWord) obtenida del ServerFetch.
 * 
 * Además de todo esto la función cuenta con un contador que tiene como función
 * medir la cantidad de ocurrencias de la letra en la palabra original. Esto se 
 * usa posteriormente para el cálculo de las vidas.
 */

const changeLetter = (generatedWord, letter, hiddenWord) => {
    let cont = 0;
    for (var i = 0; i < generatedWord.length; i++) {
        if (generatedWord[i] === letter) {
            if (i === (generatedWord.length - 1)) {
                hiddenWord = hiddenWord.slice(0, (i * 2)) + letter + hiddenWord.slice((i * 2) + 1);
            } else if (i > 0 && i < (generatedWord.length) - 1) {
                hiddenWord = hiddenWord.slice(0, i * 2) + letter + hiddenWord.slice((i * 2) + 1);
            } else if (i === 0) {
                hiddenWord = hiddenWord.slice(0, 0) + letter + hiddenWord.slice(1);
            }
        } else {
            cont++
        }
    }

    return {
        generatedWord: generatedWord,
        hiddenWord: hiddenWord,
        cont: cont
    }
}


module.exports = changeLetter;