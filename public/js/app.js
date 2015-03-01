angular.module('sampleApp', 
	['ngRoute', 'appRoutes', 
	'MainCtrl', 
	'SongCtrl', 'SongService', 
	'LoginCtrl', 
	'PlaylistCtrl', 'PlaylistService']);

// Before login:
// Login

// After login:
// Profile - Playlists
// In playlists:
// View playlists, create playlist