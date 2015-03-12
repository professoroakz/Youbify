/*
*	Model for playlist
*/

// grab the mongoose module
var mongoose = require('mongoose');
// create a new schema
var Schema = mongoose.Schema;

// define the schema
var playlistSchema = new Schema({
	name 			: { type: String, required: true },
	genre 			: { type: String, required: true },
	mood 			: { type: String, required: true },
	playlistsongs 	: [{type: Schema.ObjectId, ref: 'Song'}]
});

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Playlist', playlistSchema);
exports.Playlist = mongoose.model('Playlist', playlistSchema);