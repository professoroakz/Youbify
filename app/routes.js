/*
*   ROUTES:
*   Determine how the application responds to a client request to a
*   particular endpoint, URI or HTTP request method.
*/

// Grab the models we create
var Song = require('./models/song');
var Playlist = require('./models/playlist');

module.exports = function(app) {
    // SONGS =======================================================================
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
    
    app.patch('/api/songs/:song_id', function(req, res) {
        Song.findById(req.params.song_id, function(err, song) {
            console.log(req.body);
            if (req.body.artist != null) {
                song.artist = req.body.artist;
            }
            if (req.body.title != null) {
                song.title = req.body.title;
            }
            if (req.body.genre != null) {
                song.genre = req.body.genre;
            }
            if (req.body.url != null) {
                song.url = req.body.url;
            }

            song.save(function(err) {
                if(err) {
                    res.err(500);
                    return;
                }
                res.json(song);
            });
        })
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
        song.artist = req.body.artist;
        song.title = req.body.title;
        song.genre = req.body.genre;
        song.url = req.body.url;

        song.save(function(err) {
            if(err)
                res.send(err);
            res.json({message: "song created"});
        });
    });

// PLAYLISTS ===================================================================================


    // route to get all playlists
    app.get('/api/playlists', function(req, res) {
        // use mongoose to get all playlists in the database
        Playlist.find(function(err, playlists) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(playlists); // return all playlists in JSON format
        });
    });

    // route to get specific playlist
    app.get('/api/playlists/:playlist_id', function(req, res, next) {
        Playlist.findById(req.params.playlist_id)
        .populate('playlistsongs')
        .exec(function (err, playlist) {
          if(err) {
            res.err(500);
            return;
        }
        res.json(playlist);
    });
    });

    // route for update
    app.patch('/api/playlists/:playlist_id', function(req, res) {
        Playlist.findById(req.params.playlist_id, function(err, playlist) {
            console.log(req.body);
            if (req.body.playlistsongs != null) {
                playlist.playlistsongs = req.body.playlistsongs;
            }
            if (req.body.name != null) {
                playlist.name = req.body.name;
            }
            if (req.body.mood != null) {
                playlist.mood = req.body.mood;
            }
            if (req.body.genre != null) {
                playlist.genre = req.body.genre;
            }

            playlist.save(function(err) {
                if(err) {
                    res.err(500);
                    return;
                }
                res.json(playlist);
            });
        })
});

    // route for delete
    app.delete('/api/playlists/:playlist_id', function(req, res) {
        // use mongoose to get all playlists in the database
        Playlist.remove({_id: req.params.playlist_id
        }, function(err, playlist) {
            if (err)
                res.send(err);

            res.json({message: "succesfully deleted"}); // return all playlists in JSON format

        });
    });

    // route to handle creating goes here (app.post)
    app.post("/api/playlists", function(req, res){
        var playlist = new Playlist();
        playlist.name = req.body.name;
        playlist.id = req.body.id;
        playlist.mood = req.body.mood;
        playlist.genre = req.body.genre;
        
        Playlist.findById(req.params.playlist_id)
        .populate('playlistsongs')
        .exec(function (err, playlist) {
          if(err) {
            res.err(500);
            return;
        }
    });

        playlist.save(function(err) {
            if(err)
                res.send(err);

            res.json({message: "playlist created"});
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });


};