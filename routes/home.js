var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var home = require('../models/home.js');

router.get('/headings', function(req, res) {
    console.log('home hit');

    home.findById('56006e86475de60c46aa2c5f', function(err, home){
        if (err) throw err;

        var sh = home.sub_title;
        var mh = home.main_title;

        var headings = {
            subheader: sh,
            mainheader: mh
        }

        res.send(headings);
        console.log(home);
    })
});

module.exports = router;