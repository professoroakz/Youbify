var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});


// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', userSchema);
exports.User = mongoose.model('User', userSchema);