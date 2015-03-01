/*
*	Model for Profile
*/

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema
var profileSchema = new Schema({
	name : { type: String, required: true }
});

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Profile', profileSchema);