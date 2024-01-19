var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/SeverFetch')
var changeLetter = require('../public/javascripts/ChangeLetter')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/game', function (req, res, next) {
  data()
    .then(jsonData => {
      res.render('game', { originalWord: jsonData.word, newWord: "_ ".repeat(jsonData.word.length), lives: 5 });
    })
});


/*
*This Route manages get requests made
*by sending the letter that is believed to be correct
*In addition to this, it is inserting the letters in a
*new variable 
*/

router.get('/game/:originalWord/:letter/:newWord/:lives', function (req, res, next) {
  let resultChanges = changeLetter(req.params.originalWord, req.params.letter, req.params.newWord, parseInt(req.params.lives));

  let wordResult = resultChanges.newWord.replaceAll(' ', '');

  if (wordResult === resultChanges.originalWord && resultChanges.lives > 0) {
    res.render('winGame')
  } else if (resultChanges.cont !== resultChanges.originalWord.length && resultChanges.lives > 0) {
    res.render('game', { originalWord: resultChanges.originalWord, newWord: resultChanges.newWord, lives: resultChanges.lives })
  } else if (resultChanges.cont === resultChanges.originalWord.length && resultChanges.lives > 0) {
    resultChanges.lives--;
    res.render('game', { originalWord: resultChanges.originalWord, newWord: resultChanges.newWord, lives: resultChanges.lives })
  } else if (resultChanges.lives === 0) {
    res.render('loseGame')
  }
});

module.exports = router;
