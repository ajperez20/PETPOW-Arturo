var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/SeverFetch')


/* GET home page. */
router.get('/', function (req, res, next) {
  data()
    .then(jsonData => {
      res.render('index', { data: jsonData });
    })
});

module.exports = router;
