angular.module('SafeCtrl', ['smart-table']).controller('SafeController', function ($scope, $http) {
    
    $http.get('/api/songs')
    .success(function(data) {
        $scope.rowCollection = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

    $scope.displayedCollection = [].concat($scope.rowCollection);

    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }

        $http.delete('/api/songs/' + row._id)
        .success(function(data) {
            console.log("succesfully deleted" + row._id)
            console.log(data);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    }
});