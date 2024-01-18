var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/SeverFetch')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/game', function (req, res, next) {
  data()
    .then(jsonData => {
      res.render('game', { originalWord: jsonData.word, newWord: "_ ".repeat(jsonData.word.length) });
    })
});


/*Este Route administra las solicitudes post hechas
al mandar la letra que se cree que es correcta
además de ello este insertando las letras en una 
nueva variable */

router.get('/game/:originalWord/:letter/:newWord', function (req, res, next) {
  let originalWord = req.params.originalWord;
  let letter = req.params.letter;
  let newWord = req.params.newWord;
  for (var i = 0; i <= originalWord.length; i++) {
    if (originalWord[i] === letter) {
      if (newWord[i] === " ") {
        console.log(newWord[i]);
        console.log(newWord.slice(0,i+2));
        console.log(newWord.slice(i+3))
        newWord = newWord.slice(0,i+2) + letter + newWord.slice(i+3);
      } else {
        newWord = newWord.slice(0, i) + letter + newWord.slice(i + 1);
      }

    }
  }

  res.render('game', { originalWord: originalWord, newWord: newWord })
  // console.log(newWord);
});

module.exports = router;
