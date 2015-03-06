angular.module('SignupCtrl', []).controller('SignupController', function($scope, $window, $location, $rootScope, $auth) {
	$scope.signup = function() {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      console.log(user);
 
      // Satellizer
      $auth.signup(user)
        .catch(function(response) {
          console.log(response.data);
        });
    };
});