angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', '$authProvider', function($routeProvider, $locationProvider, $authProvider) {

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

    $authProvider.loginUrl = 'http://localhost:8080/auth/login';
    $authProvider.signupUrl = 'http://localhost:8080/auth/signup';

    $authProvider.facebook({
      clientId: '346715585530768'
  });

    $locationProvider.html5Mode(true);
}]);