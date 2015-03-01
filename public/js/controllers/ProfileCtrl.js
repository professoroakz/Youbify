angular.module('ProfileCtrl', []).controller('ProfileController', function($scope, $http) {

    $scope.tagline = 'Your profile info.';
    $scope.firstlastname = 'Name: ';
    $scope.country = 'Country: ';
    $scope.genres = 'Favorite genres:';
});