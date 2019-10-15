var express = require('express');
var fortune = require('../lib/fortune');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meadowlark Travel' });
});
router.get('/about', function(req, res, next){
  var randomFortune = fortune.getFortune();
  res.render('about', {fortune: randomFortune});
})

module.exports = router;
