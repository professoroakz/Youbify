angular.module('PlaylistService', []).factory('Playlist', ['$http', function($http) {

    return {
        // call to get all playlists
        get : function() {
            return $http.get('/api/playlists');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(playlistData) {
            return $http.post('/api/playlists', playlistData);
        },

        // call to DELETE a playlist
        delete : function(id) {
            return $http.delete('/api/playlists/' + id);
        }
    }       

}]);