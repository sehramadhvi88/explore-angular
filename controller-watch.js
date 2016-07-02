var app = angular.module('mainApp',[]);

app.controller('app',function($scope){

$scope.counter=-1;

$scope.$watch('myText',function(newValue,oldValue){

	$scope.counter++;

	console.log("newValue="+newValue);
	console.log("oldValue="+oldValue);

})

})