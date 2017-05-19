'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('MainCtrl', ["$scope", "$http", function ($scope,$http) {

	var onEmployeeResponse = function(response) {
      $scope.employees = response.data._embedded.employees;
      // $http.get($scope.user.repos_url)
      //      .then(onRepos, onError);
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the data.";
    };

    // TODO replace with environment specific url with some build tool
  	$http.get("http://localhost:8080/employees").then(onEmployeeResponse,onError);

        
    $scope.repoSortOrder = "+firstName";

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
