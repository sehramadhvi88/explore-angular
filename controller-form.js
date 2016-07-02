var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){

$routeProvider.
when('/',{

templateUrl:'login.html'
}).
when('/dashboard',{

resolve:{
	"check":function($location,$rootScope){
		if(!$rootScope.loggedIn){
			$location.path('/');
		}
	}
},
templateUrl:'dashboard.html'


}).
otherwise({

	redirectTo:'/'
});


});


app.controller('loginCtrl',function($scope,$location,$rootScope){

$scope.submit=function(){

	$rootScope.thisName="something" // global object

	if($scope.username == 'admin' && $scope.password == 'admin'){

		$rootScope.uname=$scope.username;  //
		$rootScope.password=$scope.password;

		$rootScope.loggedIn=true;
		$location.path('/dashboard');
		//window.location.hash='#/dashboard';
	}else{
		alert('wrong stuff');
	}

};


})
