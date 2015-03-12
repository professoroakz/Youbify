angular.module('SongCtrl', ['ui.bootstrap', 'smart-table', 'ngAnimate']).controller('SongController', function(Song, $scope, $http, $sce, $location) {

	$scope.tagline = 'List of songs';
	$scope.addSongHeader = 'Add new songs';
	$scope.addSongTagline = 'Add a new song to your library.';
	$scope.songToPlaylist = "Add song to playlist"
	$scope.whatPlaylist = 'Do you want to add a song to a playlist?';
  $scope.yourLibrary = 'Library';
  $scope.editSong = 'Edit a song';
	$scope.songAdded = '';
	$scope.songCollection = [];
  $scope.playlistURL = '/api/playlists:';
  $scope.songID = '';
  $scope.playlistID = '';
  $scope.playlistsongs = [];
  $scope.songToPlaylistAdded = '';

  $scope.chooseSongToPlaylistVisible = false;
  $scope.addSongToPlaylistVisible = true;
  $scope.addNewSongToPlaylistVisible = true;

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

  $scope.addSong = function() {
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
  updateSongs();
}


$scope.chooseSongToPlaylist = function (term) {
        // Get the ID for the song with a GET request for song

        $http({
          url: '/api/songs',
          method: 'GET',
        })

        .then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            if(response.data[i].title === $scope.inputTitleTypeahead){
             $scope.songID += response.data[i]._id.toString();
           }
         }
     //       console.log("Song " + songID);//as expected
   });

        // Get the ID for the playlist with a GET request for playlist

        $http({
          url: '/api/playlists',
          method: 'GET',
        })

        .then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            if(response.data[i].name === $scope.inputPlaylistTypeahead){

             $scope.playlistID += response.data[i]._id.toString();
             console.log($scope.playlistID);

             for(var j = 0; j < response.data[i].playlistsongs.length; j++){
              console.log( "a song in the playlist:" + response.data[i].playlistsongs[j] );
              $scope.playlistsongs.push(response.data[i].playlistsongs[j].toString());
            }
            break
          }
        }
     //       console.log("Playlist: " + playlistID[0]);//as expected
     $scope.playlistURL += $scope.playlistID;
     $scope.playlistsongs.push($scope.songID.toString());
   //     	console.log(playlistURL);

   console.log("URL for playlist: " + $scope.playlistURL);
   console.log("PlaylistID: " + $scope.playlistID);
   console.log("Song ID: " + $scope.songID);
   console.log("Playlistsongs: " + $scope.playlistsongs);
   $scope.addSongToPlaylistVisible = false;
   $scope.chooseSongToPlaylistVisible = true;
 });

    //    console.log("Song ID: " + $scope.songID);
    //    console.log("Playlistsongs index 0: " + $scope.playlistsongs[0]);
  }

  $scope.addSongToPlaylist = function() {

    $http({
      url: '/api/playlists/' + $scope.playlistID,
      method: 'PATCH',
      data: {
        playlistsongs : $scope.playlistsongs
      }
    });

    $scope.songToPlaylistAdded = "Song added to playlist!";
    $scope.addSongToPlaylistVisible = true;
    $scope.addNewSongToPlaylistVisible = false;

  }

  $scope.addNewSongToPlaylist = function() {

    $scope.playlistURL = '/api/playlists:';
    $scope.songID = '';
    $scope.playlistID = '';
    $scope.playlistsongs.length = 0;
    $scope.songToPlaylistAdded = '';
    $scope.chooseSongToPlaylistVisible = false;
    $scope.addNewSongToPlaylistVisible = true;
    $scope.songToPlaylistAdded = '';
    $scope.inputPlaylistTypeahead = '';
    $scope.inputTitleTypeahead = '';
  }

  var updateSongs = function(){
    $http.get('/api/songs')
    .success(function(data) {
      $scope.rowCollection = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    $scope.displayedCollection = [].concat($scope.rowCollection);
  };

  updateSongs();


  $scope.removeItem = function removeItem(row) {
    var index = $scope.rowCollection.indexOf(row);
    if (index !== -1) {
      $scope.rowCollection.splice(index, 1);
    }

    $http.delete('/api/songs/' + row._id)
    .success(function(data) {
      console.log("succesfully deleted" + row._id)

    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }

  $scope.go = function(row){
    $location.path( "/songs/" +row._id);
  };

  $scope.play = function(row){
    console.log(row);
    var index = $scope.rowCollection.indexOf(row);
    console.log(index);
    $scope.rowCollection[index].video = "asd";
    console.log($scope.rowCollection[index].video);
  };
})
// Filter to get all the URL's working, through SCE.

.filter('trustUrl', function ($sce) {
  return function(url) {
    var reg = /(watch\?v=|embed\/)([^\/]+)/;
    var idmatch = url.match(reg);
    var id = idmatch[2];

    url = "https://www.youtube.com/embed/" + id;
    console.log(url);
    return $sce.trustAsResourceUrl(url);
  };
});
