var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//added mongoose for mongodb
var mongoose = require('mongoose');

// additional routes
var routes = require('./routes/home.js');
//var users = require('./routes/users');

var app = express();

// ### MONGO DB SECTION ###

// connected to localhost
mongoose.connect("mongodb://localhost:27420/myAppStore");

// mongoose connection
var db = mongoose.connection;

//turn on db and check erors, displaying if connected
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("open");
	var MenuSchema = mongoose.Schema({
		title: String
	});
 	 //schema
 	 var Menu = mongoose.model('Menu', MenuSchema);

	// // add a record
	// var about = new Menu({ title: 'About' });

 //  	// save the record
 //  	about.save(function (err, about) {
 //  		if (err) return console.error(err);
 //  	});

 //  	// add a record
	// var contact = new Menu({ title: 'Contact' });

 //  	// save the record
 //  	contact.save(function (err, about) {
 //  		if (err) return console.error(err);
 //  	});

  	// find all of the records
  	Menu.find(function (err, Menus) {
  		if (err) return console.error(err);
  		console.log(Menus);
  	})
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ### LIST OF ALL ROUTES AVALIBLE TO APP ###
app.use('/api/home', routes);

// ### CATCH REFRESH TO INDEX ###
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('public/index.html', { root: __dirname });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
