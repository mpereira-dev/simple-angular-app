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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
