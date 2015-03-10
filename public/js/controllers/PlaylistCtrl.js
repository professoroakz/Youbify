angular.module('PlaylistCtrl', []).controller('PlaylistController', function($scope, $http) {

    $scope.tagline = 'Here\'s yo mad playlists mon!';
    $scope.createPlaylistTagLine = 'Create a new playlist';
    $scope.playlistAdded = '';
    
    $http.get('/api/playlists')
    .success(function(data) {
       console.log(data);
       $scope.playlists = data;
   })
    .error(function(data) {
        console.log('Error: ' + data);
    });

    $scope.addplaylist = function() {    
       $http({
        url: '/api/playlists',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
            name: $scope.inputPlaylistName, 
            genre: $scope.inputPlaylistGenre,
            mood: $scope.inputPlaylistMood, 
            id: $scope.inputPlaylistID,
            playlistsongs: [] }
        });
    /*
    *       Inform user of playlist added and clear the fields
    */
    $scope.playlistAdded = 'Playlist successfully added!';
    $scope.inputPlaylistID = "";
    $scope.inputPlaylistName  = "";
    $scope.inputPlaylistGenre = "";
    $scope.inputPlaylistMood = "";

    $http.get('/api/playlists')
    .success(function(data) {
       console.log(data);
       $scope.playlists = data;
   })
    .error(function(data) {
        console.log('Error: ' + data);
    });
}
});