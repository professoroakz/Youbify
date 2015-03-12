angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/songs', {
        templateUrl: 'views/song.html',
        controller: 'SongController'
    })

    .when('/songLibrary', {
        templateUrl: 'views/songLibrary.html',
        controller: 'SongController' // change this to SongController or safeCtrl to see changes
    })

    .when('/songs/:id', {
        templateUrl: 'views/songdetail.html',
        controller: 'SongDetailController'
    })

    .when('/playlists', {
        templateUrl: 'views/playlists.html',
        controller: 'PlaylistController'
    })

    .when('/playlists/:id', {
        templateUrl: 'views/playlistdetail.html',
        controller: 'PlaylistDetailController'
    })

    .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
    })

    .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'SongController'
    })

    .when('/404', {
        templateUrl: 'views/404.html',
        controller: '404Controller'
    })

    .otherwise('/404');

    $locationProvider.html5Mode(true);
}]);