angular.module('SongDetailCtrl', ['xeditable'])
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
})
.controller('SongDetailController', function($scope, $http, $location, $sce) {

	var idregex = /songs\/([^\/]+)/;
	var url = $location.url();
	var idmatch = url.match(idregex);
	var id = idmatch[1];

  $http.get('/api/songs/'+id)
  .success(function(data) {
    $scope.title = data.title;
    $scope.artist = data.artist;
    $scope.genre = data.genre;

    var reg = /(watch\?v=|embed\/)([^\/]+)/;
    var url = data.url;
    var idmatch = url.match(reg);
    var id = idmatch[2];

    vidurl = "https://www.youtube.com/embed/" + id;
    $scope.url = url;
    $scope.vidurl = $sce.trustAsResourceUrl(vidurl);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  $scope.updateSong = function() {
    console.log($scope.url);
    $http({
      url: '/api/songs/' + id,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: {
       artist: $scope.artist, 
       title: $scope.title,
       genre: $scope.genre,
       url: $scope.url}
     });
  };
});