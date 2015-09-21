var express = require('express');
var router = express.Router();
var app = express();

router.get('/headings', function(req, res) {
  console.log('home hit');
  var headings = {
    subheader: 'To Joe\'s sick ass website',
    mainheader: 'Welcome bro'
    }
  res.send(headings);
});

module.exports = router;