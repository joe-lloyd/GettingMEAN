var express = require('express');
var router = express.Router();
var app = express();

app.get('/api/home', function(req, res) {
  console.log('home hit');
  var subheader = {subheader: 'To Joe\'s sick ass website'}
  res.json(subheader);
});

module.exports = router;