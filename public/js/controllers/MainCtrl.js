angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.header = "Welcome to Youbify!"
    $scope.tagline = 'Tired of not finding your songs on Spotify?';
    $scope.smalltext = 'Youbify enables you to create playlists and add songs from youtube for instant playback!';

    $scope.isAuthenticated = function() {
      // check if logged in
    };
 
    $scope.linkFacebook = function() {
      // connect email account with facebook
    };

});