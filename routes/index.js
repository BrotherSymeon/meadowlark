var express = require('express');
var fortune = require('../lib/fortune');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meadowlark Travel' });
});
router.get('/about', function(req, res, next){
  var randomFortune = fortune.getFortune();
  res.render('about', {
    fortune: randomFortune, 
    title: 'Meadowlark Travel',
    pageTestScript: '/qa/tests-about.js'
  });
});
router.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river', { title: 'Meadowlark Travel' });
});
router.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate', {title: 'Meadowlark Travel'});
});

module.exports = router;
