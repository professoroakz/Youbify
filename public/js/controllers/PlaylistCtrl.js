angular.module('PlaylistCtrl', []).controller('PlaylistController', function($scope, $http) {

    $scope.tagline = 'Here\'s yo mad playlists modn!';
    $http.get('/api/playlists')
                .success(function(data) {
                        $scope.playlists = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});