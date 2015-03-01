// grab the nerd model we just created
var Song = require('./models/song');

module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/songs', function(req, res) {
        // use mongoose to get all songs in the database
        Song.find(function(err, songs) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(songs); // return all songs in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
