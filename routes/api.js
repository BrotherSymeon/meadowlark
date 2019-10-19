var express = require('express');
var router = express.Router();

var tours = [
  {id:1, name:'Hood River Tour', price: 789.00},
  {id:2, name:'Nile Tour', price: 789.00},
  {id:3, name:'Shocoe Bottom Tour', price: 789.00},
  {id:4, name:'James River Tour', price: 789.00},

]

router.get('/tours', function(req, res){
  res.json(tours);
});

module.exports = router;