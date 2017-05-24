'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:TrashCtrl
 * @description
 * # TrashCtrl
 * Controller of the simpleAngularAppApp
 */
 // TODO this is very similar to main.js find a way to reuse functionality in Angular
angular.module('simpleAngularAppApp')
  .controller('TrashCtrl', ["$scope", "$http", "$location", function ($scope,$http,$location) {

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
      $http.get("http://localhost:8080/employees/search/findByDeleted?deleted=true").then(onEmployeeResponse,onError);
    };
        
    $scope.repoSortOrder = "+firstName";

    $scope.emptyTrash = function(){
      $http.delete("http://localhost:8080/employees/empty-trash").then(loadEmployees,onError);
    };

    $scope.restore = function(employee){
      employee.deleted=false;
      $http.patch(employee._links.self.href,employee).then(loadEmployees,onError);
    };

    $scope.delete = function(employee){
      // Hard delete
      $http.delete(employee._links.self.href).then(loadEmployees,onError);
    };

    loadEmployees();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
