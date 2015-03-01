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

    // 
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })

    .when('/playlists', {
        templateUrl: 'views/playlists.html',
        controller: 'PlaylistController'
    });


$locationProvider.html5Mode(true);
}]);