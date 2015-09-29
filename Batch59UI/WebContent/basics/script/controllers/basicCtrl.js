	var app = angular.module("App", []);
	/*
	 * First Type
	 * 
	 *app.controller("basicCtrl", function($scope) {
		
	});*/
	/*
	 * Second Type
	 * */
	app.controller("basicCtrl",['$scope',basic]);
	
	function basic($scope){
		$scope.subjects = [{name:"Phy",marks:"70"},{name:"Mat",marks:"80"},{name:"Che",marks:"50"},{name:"Sci",marks:"90"}];
		console.log($scope.subjects);
		
		$scope.callCtrl = function(){
			console.log("this is called function");
		}
	}