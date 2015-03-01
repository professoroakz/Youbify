/* 
*	app.js - Define all the modules being used
*/

angular.module('sampleApp', 
	['ngRoute', 'appRoutes', 
	'MainCtrl', 
	'SongCtrl', 'SongService', 
	'LoginCtrl', 
	'PlaylistCtrl', 'PlaylistService',
	'ProfileCtrl', 'ProfileService']);