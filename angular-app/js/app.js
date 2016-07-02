angular.module('EmailApp',[
'ngRoute' // add module


])
.config(function($routeProvider){

'use strict';

$routeProvider
	.when('/inbox',{
		templateUrl:'views/inbox.html',
		controller:'InboxCtrl',
		controllerAs:'inbox' // alias
	})
	.otherwise({
		redirectTo:'/inbox'
	})


});





