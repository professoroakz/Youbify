/*
*   Handle the HTTP requests from the Song page
*/

angular.module('SongService', []).factory('Song', ['$http', function($http) {

    return {
        // call to get all songs
        get : function() {
            return $http.get('/api/songs');
        },

        post : function() {
            return $http.post('/api/songs');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new song
        create : function(songData) {
            return $http.post('/api/songs', songData);
        },

        // call to DELETE a song
        delete : function(id) {
            return $http.delete('/api/songs/' + id);
        }

    }       

}]);