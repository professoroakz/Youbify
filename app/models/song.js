/*
*	Model for song
*/

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema
var songSchema = new Schema({
	artist : { type: String, required: true },
	title : {type: String, required: true},
	genre : {type: String, required: true},
	url : { type: String, required: true }
});

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Song', songSchema);