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

    .when('/songs/:id', {
        templateUrl: 'views/songdetail.html',
        controller: 'SongDetailController'
    })

    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })

    .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupController'
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

    .when('/404', {
        templateUrl: 'views/404.html',
        controller: '404Controller'
    })
    .otherwise('/404');

    $locationProvider.html5Mode(true);
}]);