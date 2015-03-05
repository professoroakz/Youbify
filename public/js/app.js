/* 
*	app.js - Define all the modules being used
*/

angular.module('Youbify', 
	['ngRoute',
	'ngMessages', 
	'appRoutes', 
	'MainCtrl', 
	'SongCtrl', 
	'SongService', 
	'LoginCtrl', 
	'PlaylistCtrl',
	'PlaylistService',
	'PlaylistDetailCtrl',
	'ProfileCtrl', 
	'ProfileService',
	'404Ctrl']);
