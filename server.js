// server.js

// set up =================================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var methodOverride 	= require('method-override');
var session      = require('express-session');
var db 				= require('./config/db');

// configuration ===========================================

// connect to our mongoDB database 
mongoose.connect(db.url);

require('./config/passport')(passport); // pass passport for configuration

// include models
var Song = require("./app/models/song");
var Playlist = require('./app/models/playlist');
var Profile = require('./app/models/profile');

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)





////////////////////////////////////////////////////////////////////////// ANGULAR-BRIDGE 

// Mount all the resource on /api prefix
var angularBridge = new (require('angular-bridge'))(app, {
    urlPrefix : '/api/'
});

// With express you can password protect a url prefix :

// Expose the Song, Playlist collection via REST
angularBridge.addResource('Song', db.Song);
angularBridge.addResource('Playlist', db.Playlist);

////////////////////////////////////////////////////////////////////////////////////////////



// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// required for passport
app.use(session({ secret: 'oscisoktispro1337' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app, passport); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port: ' + port);

// expose app           
exports = module.exports = app;
