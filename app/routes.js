// grab the nerd model we just created
var Song = require('./models/song');

module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // route to get all songs
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

    // route to get specific song
    app.get('/api/songs/:song_id', function(req, res) {
        Song.findById(req.params.song_id, function(err, song) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(song); // return all songs in JSON format
        });
    });

    // route for update
    app.put('/api/songs/:song_id', function(req, res) {
        Song.findById(req.params.song_id, function(err, song) {
            if(err)
                res.send(err);

            song.name = req.body.name;
            song.url = req.body.url;

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            song.save(function(err) {
                if (err)
                    res.send(err);

            res.json(song); // return all songs in JSON format
            });
        });
    });

    // route for delete
    app.delete('/api/songs/:song_id', function(req, res) {
        // use mongoose to get all songs in the database
        Song.remove({_id: req.params.song_id
        }, function(err, song) {
            if (err)
                res.send(err);

            res.json({message: "succesfully deleted"}); // return all songs in JSON format

        });
    });

    // route to handle creating goes here (app.post)
    app.post("/api/songs", function(req, res){
        var song = new Song();
        song.name = req.body.name;
        song.url = req.body.url;

        song.save(function(err) {
            if(err)
                res.send(err);

            res.json({message: "song created"});
        });
    });
    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
