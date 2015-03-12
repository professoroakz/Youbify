angular.module('PlaylistDetailCtrl', ['smart-table']).controller('PlaylistDetailController', function($scope, $http, $location) {
	// /playlists/:id
	var idregex = /playlists\/([^\/]+)/;
	var url = $location.url();
	var idmatch = url.match(idregex);
	var id = idmatch[1];

  var updateSongs = function(){
    $http.get('/api/playlists/'+id)
    .success(function(data) {
      $scope.tagline = data.name;
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
    console.log(row);
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
});