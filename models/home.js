// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var homeSchema = new Schema({
  main_title: String,
  sub_title: String
});

// the schema is useless so far
// we need to create a model using it
var Home = mongoose.model('Home', homeSchema);

// make this available to our users in our Node applications
module.exports = Home;