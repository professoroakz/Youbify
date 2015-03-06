var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false }, //do not retrieve password if not stated
  fullName: String,
  accessToken: String
});

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', userSchema);
exports.Song = mongoose.model('User', userSchema);