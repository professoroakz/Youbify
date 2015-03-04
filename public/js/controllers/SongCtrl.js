angular.module('SongCtrl', []).controller('SongController', function($scope, $http, $sce) {

    $scope.tagline = 'List of songs';
    $scope.addSongTagline = 'Add new songs!';
    $scope.whatPlaylist = 'Do you want to add the song to a playlist?';
    $http.get('/api/songs')
                .success(function(data) {
                        $scope.songs = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
    /*

	var data = "{"_id":"54f4f8a991abf7ff3c64eef0","songz":[],"__v":1,"playlistsongs":[{"_id":"54f458dc6ded49621c043e54","url":"https://www.youtube.com/watch?v=FWR9MR5juWI","genre":"Deep House","title":"You Know You Like It","artist":"AlunaGeorge","__v":0},{"_id":"54f6ddaedc61acb63b406711","url":"https://www.youtube.com/watch?v=UtF6Jej8yb4","genre":"House","title":"The nights","artist":"Avicii","__v":0}]}";

> data
'{"_id":"54f4f8a991abf7ff3c64eef0","songz":[],"__v":1,"playlistsongs":[{"_id":"54f458dc6ded49621c043e54","url":"https://www.youtube.com/watch?v=FWR9MR5juWI","genre":"Deep House","title":"You Know You Like It","artist":"AlunaGeorge","__v":0},{"_id":"54f6ddaedc61acb63b406711","url":"https://www.youtube.com/watch?v=UtF6Jej8yb4","genre":"House","title":"The nights","artist":"Avicii","__v":0}]}'
> var obj = JSON.parse(data);

> obj
{ _id: '54f4f8a991abf7ff3c64eef0',
  songz: [],
  __v: 1,
  playlistsongs: 
   [ { _id: '54f458dc6ded49621c043e54',
       url: 'https://www.youtube.com/watch?v=FWR9MR5juWI',
       genre: 'Deep House',
       title: 'You Know You Like It',
       artist: 'AlunaGeorge',
       __v: 0 },
     { _id: '54f6ddaedc61acb63b406711',
       url: 'https://www.youtube.com/watch?v=UtF6Jej8yb4',
       genre: 'House',
       title: 'The nights',
       artist: 'Avicii',
       __v: 0 } ] }
> obj.playlistsongs.map(function(song) {return song._id});
[ '54f458dc6ded49621c043e54', '54f6ddaedc61acb63b406711' ]
> var ids = obj.playlistsongs.map(function(song) {return song._id});
undefined
> ids.push('newid');
3
> ids
[ '54f458dc6ded49621c043e54',
  '54f6ddaedc61acb63b406711',
  'newid' ]
> 

    */
});