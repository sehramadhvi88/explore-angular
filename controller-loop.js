var app = angular.module('mainApp',[]);

app.controller('app',function($scope){

/*

wud not work in case of long range

var range=10;
var myRange=[];

for(i=0;i<range;i++){
	myRange.push(i);
}
$scope.myRange=myRange;*/

var range = new Array(100);

$scope.range=range;

})