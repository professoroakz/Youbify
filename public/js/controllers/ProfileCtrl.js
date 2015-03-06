angular.module('ProfileCtrl', []).controller('ProfileController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
            //Custom Profile functionality
            $http.get('/api/userData')
                .success(function(data) {
                    $scope.name = data.facebook.name; //Expose the user data to your angular scope
                    $scope.email = data.facebook.email;
                })}]);