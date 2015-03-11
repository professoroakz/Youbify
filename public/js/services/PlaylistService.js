/*
*   Handle the HTTP requests from the Playlist page
*/

angular.module('PlaylistService', []).factory('Playlist', ['$http', function($http) {

var getPlaylist = function() {
    return $http.get('/api/playlists', {cache:true})
    .then(function(data){
        return data;
    })
}

    return {
        // call to get all playlists
        getPlaylist : getPlaylist
    }


}]);