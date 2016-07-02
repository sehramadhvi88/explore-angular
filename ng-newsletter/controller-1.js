var app=angular.module('mainApp',[]);

app.controller('app',function($scope){

$scope.shouldShowDiv=true;
$scope.shouldShowDiv1=true;

$scope.changeShow=function(){

	$scope.shouldShowDiv1 = !$scope.shouldShowDiv1;
}

$scope.user = {
    email: 'madhvi@fullstack.io'
  }

var updateClock=function(){
	$scope.clock=new Date();
}

var timer=setInterval(function(){

	$scope.$apply(updateClock);

},1000);

updateClock();

}).run(function($rootScope) {
  $rootScope.user = {
    email: 'ari@fullstack.io'
  }
  $rootScope.message="welcome back";
});


app.controller('ParentController',function($scope){

	$scope.person ={greeted:false};



});

app.controller('ChildController',function($scope){

	$scope.sayHello=function(){
		$scope.person.greeted=true;
	}

	$scope.reset=function(){
		$scope.person.greeted=false;	
	}

});


//angular.module('myApp') // <-- This is the getter function for a module previously defined
