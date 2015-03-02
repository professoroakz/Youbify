/* 
*	app.js - Define all the modules being used
*/

angular.module('sampleApp', 
	['ngRoute', 'ngFacebook' 'appRoutes', 
	'MainCtrl', 
	'SongCtrl', 'SongService', 
	'LoginCtrl', 
	'PlaylistCtrl', 'PlaylistService',
	'ProfileCtrl', 'ProfileService']);