'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('MainCtrl', ["$scope", "$http", "$location", function ($scope,$http,$location) {

	  var onEmployeeResponse = function(response) {
      $scope.employees = response.data._embedded.employees;
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the data.";
    };

    var loadEmployees = function (){
      // TODO replace with environment specific url with some build tool
      // TODO for some reason this sends out 2 http GET requests, not going to bother with it now
      // console.log('loading employees');
      $http.get("http://localhost:8080/employees/search/findByDeleted?deleted=false").then(onEmployeeResponse,onError);
    };
        
    $scope.repoSortOrder = "+firstName";

    $scope.edit = function(employee){
      var uriArray = employee._links.self.href.split('/');
      $location.path('/employee/'+uriArray[uriArray.length-1]);
    };

    $scope.copy = function(employee){
      var uriArray = employee._links.self.href.split('/');
      $http.post('http://localhost:8080/employees/copy?id='+uriArray[uriArray.length-1]).then(loadEmployees,onError);
    };

    $scope.delete = function(employee){
      // Soft delete
      employee.deleted=true;
      $http.patch(employee._links.self.href,employee).then(loadEmployees,onError);
    };

    loadEmployees();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
