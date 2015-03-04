angular.module('PlaylistCtrl', []).controller('PlaylistController', function($scope, $http) {

    $scope.tagline = 'Here\'s yo mad playlists mon!';
    $http.get('/api/playlists')
                .success(function(data) {
                	console.log(data);
                        $scope.playlists = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});