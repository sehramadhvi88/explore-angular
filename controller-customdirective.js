var app= angular.module('mainApp',[]);

app.directive('myFirstDirective',function(){
	function linkFunction(scope,elem,attr){ // takes 3 elements scope , element , attribute

			elem.bind('click',function(){
				console.log(elem[0].innerHTML);
			})

	}

	return{
		template:"hello world !!!",
		restrict: 'EA', // 'E' , 'EA'
		link : linkFunction
		//templateUrl:"test.html"
	}
});

app.directive('mySecondDrirective',function(){

	function linkFunction($scope,elem,attr){
		$scope.name="madhvi";
		$scope.changeName=function(newName){
			//$scope.name=newName;
			$scope.name=$scope.controllerProperty;
		}

	}
	return{
		restrict:'EA',
		link:linkFunction,
		scope:{
			name:'@' ,// this name shud match something on html in drierctive
			age : '='
		},
		template :['<p>value of name directive : {{namevar}}</p>',
				,'<p>enter new "name" : <input type="text" ng-model="namevar"></p>',
				'<p>value of age in directive : {{age }}</p>',
				'<p>enter a new age : <input type="text" ng-model="age"></p>'].join('')
		//scope:true,  // accepts three value true , false - not writing scope or setting false both are same , or object
		//template:'<span ng-click="changeName(\'sehra\')">current text:{{name}}</span>'
	}



});

// by default uses JQLite

app.controller('app',function($scope){

	//$scope.controllerProperty="this is controller specific property";
	$scope.namevar="codedamn";
	$scope.age=100;

});



// scope - {} - @ - text binding
	//  = - two way bind 
	// & - onw way bind