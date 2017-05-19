'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:EmployeeVCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('EmployeeCtrl', ["$scope", "$http", function ($scope,$http) {

  	// $scope.employee = { firstName: "Bob"}; can i bind to an object?
  	$scope.firstName = "Miguel";


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
