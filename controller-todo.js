var app = angular.module('mainApp',[]);


app.controller('app',function($scope){

$scope.tasks=[]; // array

var taskData= localStorage['taskList'];

if(taskData !== undefined){

	$scope.tasks= JSON.parse(taskData);
}

$scope.searchEnter=function(){

	console.log(event.which || event.keyCode)
	if(event.which == 13 && $scope.task !=""){
		$scope.addTask();
	}

		
	};


 $scope.addTask=function(){

  $scope.tasks.push({'taskMsg':$scope.task,'status':false});  
  console.log($scope.tasks);
  localStorage['taskList']= JSON.stringify($scope.tasks);
  $scope.task='';

 }

 $scope.contentEdit=function(msg){

  console.log("edit");
  console.log($scope.tasks);

for (var i = 0; i < $scope.tasks.length; i++) {
   if($scope.tasks[i].taskMsg == msg){
    $scope.tasks[i].taskMsg = event.target.innerHtml
   }

   localStorage['taskList']= JSON.stringify($scope.tasks);
};

   // html attribute
  event.target.contentEditable = event.target.contentEditable == "false" ? "true":"false"
 };


 $scope.enterAgain=function(msg){

   
   if(event.which == 13 && msg !=""){
  $scope.contentEdit(msg);
  console.log("enter ="+msg)
 }

};

});