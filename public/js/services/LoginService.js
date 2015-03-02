/*
*   Handle the HTTP requests from the Login page
*/

angular.module('LoginService', []).factory('Login', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/login');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(loginData) {
            return $http.post('/api/login', loginData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/login/' + id);
        }
    }       

}]);