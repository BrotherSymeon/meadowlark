var express = require('express');
var fortune = require('../lib/fortune');
//var debug = require('debug')('meadowlark:server');


var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.render('index', { title: 'Meadowlark Travel' });
  } catch (err) {
    console.log(err);
    next(err);
  }

});
router.get('/about', function (req, res, next) {
  var randomFortune = fortune.getFortune();
  res.render('about', {
    fortune: randomFortune,
    title: 'Meadowlark Travel',
    pageTestScript: '/qa/tests-about.js'
  });
});
router.get('/headers', function (req, res) {
  res.set('Content-Type', 'text/plain');
  var s = '';
  for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
  res.send(s);
});
router.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river', { title: 'Meadowlark Travel' });
});
router.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate', { title: 'Meadowlark Travel' });
});

module.exports = router;
