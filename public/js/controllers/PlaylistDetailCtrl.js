angular.module('PlaylistDetailCtrl', ['smart-table', 'xeditable']).controller('PlaylistDetailController', function($scope, $http, $location) {
	// /playlists/:id
	var idregex = /playlists\/([^\/]+)/;
	var url = $location.url();
	var idmatch = url.match(idregex);
	var id = idmatch[1];

  var updateSongs = function(){
    $http.get('/api/playlists/'+id)
    .success(function(data) {
      $scope.name = data.name;
      $scope.genre = data.genre;
      $scope.mood = data.mood;
      $scope.rowCollection = data.playlistsongs;
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
    updateSongs();
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
};

$scope.goToSong = function(row){
  $location.path( "/songs/" +row._id);
};

  $scope.updatePlaylist = function() {
    $http({
      url: '/api/playlists/' + id,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: {
       name: $scope.name, 
       mood: $scope.mood,
       genre: $scope.genre,
       playlistsongs: $scope.rowCollection
     }
     });
  };
});