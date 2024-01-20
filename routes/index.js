var express = require('express');
var router = express.Router();


/* Se renderiza la vista index. */
router.get('/', function (req, res, next) {
  res.render('prueba')
});

module.exports = router;
