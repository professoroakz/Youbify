angular.module('SongCtrl', []).controller('SongController', function($scope, $http, $sce) {

    $scope.tagline = 'This is the song controller talking yo!';
    $http.get('/api/songs')
                .success(function(data) {
                        $scope.songs = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

});