'use strict';

/**
 * @ngdoc overview
 * @name simpleAngularAppApp
 * @description
 * # simpleAngularAppApp
 *
 * Main module of the application.
 */
angular
  .module('simpleAngularAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/trash', {
        templateUrl: 'views/trash.html',
        controller: 'TrashCtrl',
        controllerAs: 'trash'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl',
        controllerAs: 'employee'
      })
      .when('/employee/:employeeURI', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl',
        controllerAs: 'employee'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // Fix routing issue with Angular 1.6 
  // https://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working/41213016#41213016
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);