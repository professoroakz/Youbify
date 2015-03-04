angular.module('SongCtrl', []).controller('SongController', function($scope, $http, $sce) {

    $scope.tagline = 'List of songs';
    $scope.addSongTagline = 'Add new songs!';
    $scope.whatPlaylist = 'What playlist should the song be added to?';
    $http.get('/api/songs')
                .success(function(data) {
                        $scope.songs = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

});