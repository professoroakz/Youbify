angular.module('MainCtrl', []).controller('MainController', function($scope, $window, $rootScope, $auth) {

	$scope.header = "Welcome to Youbify!"
  $scope.tagline = 'Tired of not finding your songs on Spotify?';
  $scope.smalltext = 'Youbify enables you to create playlists and add songs from youtube for instant playback!';
  $scope.registertext = 'To use Youbify, please log in or register';
  $scope.loggedintext = 'You are logged in! Go crazy tiger'

  $scope.isAuthenticated = function() {
    //return true;
    return $auth.isAuthenticated();
  };

  $scope.linkFacebook = function() {
    $auth.link('facebook')
    .then(function(response) {
      $window.localStorage.currentUser = JSON.stringify(response.data.user);
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    });
  };

});