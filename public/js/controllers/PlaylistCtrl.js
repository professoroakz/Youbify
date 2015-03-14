angular.module('PlaylistCtrl', ['smart-table']).controller('PlaylistController', function($scope, $http, $location) {
  $scope.tagline = 'Here\'s yo mad playlists mon!';
  $scope.createPlaylistTagLine = 'Create a new playlist';
  $scope.playlistAdded = '';

  $scope.addplaylist = function() {    
   $http({
    url: '/api/playlists',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      name: $scope.inputPlaylistName, 
      genre: $scope.inputPlaylistGenre,
      mood: $scope.inputPlaylistMood, 
      id: $scope.inputPlaylistID,
      playlistsongs: [] }
    });
    /*
    *       Inform user of playlist added and clear the fields
    */
    $scope.playlistAdded = 'Playlist successfully added!';
    $scope.inputPlaylistID = "";
    $scope.inputPlaylistName  = "";
    $scope.inputPlaylistGenre = "";
    $scope.inputPlaylistMood = "";

    updatePlaylists();
  };

  var updatePlaylists = function(){
    $http.get('/api/playlists')
    .success(function(data) {
      $scope.rowCollection = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    $scope.displayedCollection = [].concat($scope.rowCollection);
  };

  updatePlaylists();

  $scope.goToPlaylist = function(row){
  $location.path( "/playlists/" +row._id);
};

  $scope.removeItem = function removeItem(row) {
    console.log(row);
    var index = $scope.rowCollection.indexOf(row);
    if (index !== -1) {
      $scope.rowCollection.splice(index, 1);
    }

    $http.delete('/api/playlists/' + row._id)
    .success(function(data) {
      console.log("succesfully deleted" + row._id)

    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }

  $scope.go = function(row){
    $location.path( "/playlists/" +row._id);
  };
});
