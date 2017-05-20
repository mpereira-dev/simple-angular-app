'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:EmployeeVCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('EmployeeCtrl', ["$scope", "$http", "$location", "$routeParams", function ($scope,$http,$location,$routeParams) {

    var employeeURI = $routeParams.employeeURI;

    var onEmployeeResponse = function(response) {
      // Date not automatically converted from string to Date object
      var dateHired = new Date(response.data.dateHired);
      response.data.dateHired = dateHired;
      $scope.employee = response.data;
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the data.";
    };
  	
  	var successCallback = function(response){ 
  		$location.path('/'); 
  	};
    var errorCallback = function(reason){ 
    	$scope.error = "There was an error saving the data."; 
    };
  	$scope.clear = function(){ 
  		$scope.employee = {}; 
  	};
  	$scope.submit = function(){
      if(!employeeURI){
  		  $http.post("http://localhost:8080/employees",$scope.employee).then(successCallback,errorCallback);
      } else {
        $http.put("http://localhost:8080/employees/"+employeeURI,$scope.employee).then(successCallback,errorCallback);
      }
  	};

    var init = function (){
      if(employeeURI){
        $http.get("http://localhost:8080/employees/"+employeeURI).then(onEmployeeResponse,onError);
      }
    };

    init();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
