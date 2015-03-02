// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '346715585530768', // your App ID
		'clientSecret' 	: '75e2f02b7940853face6a1c816a2738a', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	}
};