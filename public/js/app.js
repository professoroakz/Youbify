/* 
*	app.js - Define all the modules being used
*/

angular.module('Youbify', 
	['ngRoute',
	'ngMessages',
	'satellizer',
	'NavbarCtrl',
	'appRoutes', 
	'MainCtrl', 
	'SongCtrl',
	'SongDetailCtrl',
	'SongService', 
	'LoginCtrl', 
	'SignupCtrl',
	'PlaylistCtrl',
	'PlaylistService',
	'PlaylistDetailCtrl',
	'ProfileCtrl', 
	'ProfileService',
	'404Ctrl']);
