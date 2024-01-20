var express = require('express');
var router = express.Router();

var changeLetter = require('../public/javascripts/ChangeLetter');

/**
 * 
 * Se renderiza el tablero de juego, pasando a su vez las variables locales 
 * generatedWord, hiddenWord y playerLives que contienen la información que será 
 * mostrada en la vista del tablero de juego 'game'
 */
router.get('/game', function (req, res, next) {
  data()
    .then(jsonData => {
      generatedWord = jsonData.word;
      hiddenWord = "_ ".repeat(jsonData.word.length);
      res.render('game', { generatedWord: jsonData.word, hiddenWord: hiddenWord, playerLives: 5 });
    })

});


/**
 * Se reciben los parámetros enviados por la url para ser procesados y
 * hacer los cambios necesarios como mandar a hacer el cambio de letra con 
 * la función changeLetter y luego dependiendo de ciertas normas se renderiza
 * el tablero de juego o las vistas de campeón o de perdedor respectivamente
 */
router.get('/game/:generatedWord/:letter/:hiddenWord/:playerLives', function (req, res, next) {
  let resultChanges = changeLetter(req.params.generatedWord, req.params.letter, req.params.hiddenWord);
  let playerLives = parseInt(req.params.playerLives);

  let wordResult = resultChanges.hiddenWord.replaceAll(' ', '');

  if (wordResult === resultChanges.generatedWord && playerLives > 0) {
    res.render('winGame')
  } else if (resultChanges.cont !== resultChanges.generatedWord.length && playerLives > 0) {
    res.render('game', { generatedWord: resultChanges.generatedWord, hiddenWord: resultChanges.hiddenWord, playerLives: playerLives });
  } else if (resultChanges.cont === resultChanges.generatedWord.length && playerLives > 0) {
    playerLives--;
    res.render('game', { generatedWord: resultChanges.generatedWord, hiddenWord: resultChanges.hiddenWord, playerLives: playerLives });
  } else if (playerLives === 0) {
    res.render('loseGame')
  }
});

module.exports = router;
