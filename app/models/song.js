// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema
var songSchema = new Schema({
	name : String,
	url : String
});

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Song', songSchema);