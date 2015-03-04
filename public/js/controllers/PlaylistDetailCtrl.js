angular.module('PlaylistDetailCtrl', []).controller('PlaylistDetailController', function($scope, $http, $location) {
	// /playlists/:id
	var idregex = /playlists\/([^\/]+)/;
	var url = $location.url();
	var idmatch = url.match(idregex);
	var id = idmatch[1];

    $scope.tagline = 'Here\'s yo mad playlists mon!';
    $http.get('/api/playlists/'+id)
                .success(function(data) {
                        $scope.playlist = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});