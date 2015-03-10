angular.module('SongCtrl', ['ui.bootstrap']).controller('SongController', function($scope, $http, $sce) {

	$scope.tagline = 'List of songs';
	$scope.addSongHeader = 'Add new songs';
	$scope.addSongTagline = 'Add a new song to your library.';
	$scope.addSongToPlaylist = "Add song to playlist"
	$scope.whatPlaylist = 'Do you want to add a song to a playlist?';
	$scope.songAdded = '';
	$scope.songCollection = [];


	$http.get('/api/songs')
	.success(function(data) {
		$scope.songs = data;

	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

$scope.searchSong = function (term) {
        return $http({
            url: '/api/songs',
            method: 'GET',
        }).
        then(function (response) {
            var titles = [];
            for (var i = 0; i < response.data.length; i++) {
                titles.push(response.data[i].title);
            }
            console.log(titles);//as expected

            return titles;
        });
    };

$scope.searchPlaylist = function (term) {
        return $http({
            url: '/api/playlists',
            method: 'GET',
        }).
        then(function (response) {
            var playlistNames = [];
            for (var i = 0; i < response.data.length; i++) {
                playlistNames.push(response.data[i].name);
            }
            console.log(playlistNames);//as expected

            return playlistNames;
        });
    };

	$scope.addsong = function() {
		$http({
		url: '/api/songs',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		data: {
			artist: $scope.inputArtist, 
			title: $scope.inputTitle,
			genre: $scope.inputGenre, 
			url: $scope.inputYoutubeUrl}
			});
	/*
	*		Inform user of song added and clear the fields
	*/
	$scope.songAdded = 'Song successfully added!';
	$scope.inputArtist = "";
	$scope.inputTitle  = "";
	$scope.inputGenre = "";
	$scope.inputYoutubeUrl = "";

	$http.get('/api/songs')
	.success(function(data) {
		$scope.songs = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
}

	$scope.addToPlaylist = function() {
		$http({
		url: '/api/songs',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		data: {
			artist: $scope.inputArtist, 
			title: $scope.inputTitle,
			genre: $scope.inputGenre, 
			url: $scope.inputYoutubeUrl}
			});
	/*
	*		Inform user of song added and clear the fields
	*/
	$scope.songAdded = 'Song successfully added!';
	$scope.inputArtist = "";
	$scope.inputTitle  = "";
	$scope.inputGenre = "";
	$scope.inputYoutubeUrl = "";

	$http.get('/api/songs')
	.success(function(data) {
		$scope.songs = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
}



});
    /*

  var data = "{"_id":"54f4f8a991abf7ff3c64eef0","songz":[],"__v":1,"playlistsongs":[{"_id":"54f458dc6ded49621c043e54","url":"https://www.youtube.com/watch?v=FWR9MR5juWI","genre":"Deep House","title":"You Know You Like It","artist":"AlunaGeorge","__v":0},{"_id":"54f6ddaedc61acb63b406711","url":"https://www.youtube.com/watch?v=UtF6Jej8yb4","genre":"House","title":"The nights","artist":"Avicii","__v":0}]}";

> data
'{"_id":"54f4f8a991abf7ff3c64eef0","songz":[],"__v":1,"playlistsongs":[{"_id":"54f458dc6ded49621c043e54","url":"https://www.youtube.com/watch?v=FWR9MR5juWI","genre":"Deep House","title":"You Know You Like It","artist":"AlunaGeorge","__v":0},{"_id":"54f6ddaedc61acb63b406711","url":"https://www.youtube.com/watch?v=UtF6Jej8yb4","genre":"House","title":"The nights","artist":"Avicii","__v":0}]}'
> var obj = JSON.parse(data);

> obj
{ _id: '54f4f8a991abf7ff3c64eef0',
  songz: [],
  __v: 1,
  playlistsongs: 
   [ { _id: '54f458dc6ded49621c043e54',
       url: 'https://www.youtube.com/watch?v=FWR9MR5juWI',
       genre: 'Deep House',
       title: 'You Know You Like It',
       artist: 'AlunaGeorge',
       __v: 0 },
     { _id: '54f6ddaedc61acb63b406711',
       url: 'https://www.youtube.com/watch?v=UtF6Jej8yb4',
       genre: 'House',
       title: 'The nights',
       artist: 'Avicii',
       __v: 0 } ] }
> obj.playlistsongs.map(function(song) {return song._id});
[ '54f458dc6ded49621c043e54', '54f6ddaedc61acb63b406711' ]
> var ids = obj.playlistsongs.map(function(song) {return song._id});
undefined
> ids.push('newid');
3
> ids
[ '54f458dc6ded49621c043e54',
  '54f6ddaedc61acb63b406711',
  'newid' ]
> 

    */