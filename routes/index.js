var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  console.log('home hit');
  res = 'Some Text';
});

router.get('/Home', function(req, res) {
  console.log('Home hit');
  res = 'Some Text';
});

router.get('/', function(req, res) {
  console.log('/ hit');
  res = 'Some Text';
});

module.exports = router;
