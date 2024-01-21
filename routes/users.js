var express = require('express');
var router = express.Router();

/**
 * 
 * Se renderiza el tablero de juego, pasando a su vez las variables locales 
 * generatedWord, hiddenWord y playerLives que contienen la información que será 
 * mostrada en la vista del tablero de juego 'game'
 */
router.get('/game', function (req, res, next) {
  res.render('game');

})

module.exports = router;
