/*
*   Handle the HTTP requests from the Profile page
*/

angular.module('ProfileService', []).factory('Profile', ['$http', function($http) {

    return {
        // call to get all profiles
        get : function() {
            return $http.get('/api/profile');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new profile
        create : function(profileData) {
            return $http.post('/api/profile', profileData);
        },

        // call to DELETE a profile
        delete : function(id) {
            return $http.delete('/api/profile/' + id);
        }
    }       

}]);