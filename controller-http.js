var app = angular.module('mainApp',[]);

app.controller('people',function($scope,$http){

	// initiate get request from http get
	$http.get('http://localhost:8080/angular-workshop/database.json')
	.success(function(response){

		$scope.persons=response.records;

	})





});