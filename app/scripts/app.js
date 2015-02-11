/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/beersearch']/*deps*/, function (angular, MainCtrl, AboutCtrl, BeerSearchService)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name beercheerApp
   * @description
   * # beercheerApp
   *
   * Main module of the application.
   */
  return angular
    .module('beercheerApp', ['beercheerApp.controllers.MainCtrl',
'beercheerApp.controllers.AboutCtrl',
'beercheerApp.services.BeerSearch',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
